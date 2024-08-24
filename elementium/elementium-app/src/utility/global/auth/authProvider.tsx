import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface User {
  id?: number;
  email: string;
  username: string;
  avatar?: string;
  role: "user" | "admin" | "";
}

export interface NewUser extends User {
  password: string;
}

// Shape of context
interface AuthContextType {
  onboardingEmail: string | null;
  onboardingName: string | null;
  userLoggedIn: User | null;
  isAuthenticated: boolean;
  hasPermission: boolean;
  createAccount: (userForm: ILoginFormType) => Promise<IFeedback>;
  login: (userForm: ILoginFormType) => Promise<IFeedback>;
  approveOTP: (otp: number) => Promise<IFeedback>;
  setUserLoggedIn: (user: User | null) => void;
  setPermission: (permission: boolean) => void;
  setOnboardingEmail: (email: string | null) => void;
  setOnboardingName: (name: string | null) => void;
  logout: () => void;
}

interface ILoginFormType {
  email: string;
  password: string;
}

export interface IFeedback {
  type: number;
  status: "Success" | "Warning" | "Error";
  message: string;
  body?: any;
}

// Default values for the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [onboardingEmail, setOnboardingEmail] = useState<string | null>(null);
  const [onboardingName, setOnboardingName] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = useState<User | null>({
    id: 1,
    email: "",
    username: "",
    avatar: "",
    role: "",
  });

  const createAccount = async (
    userForm?: ILoginFormType
  ): Promise<IFeedback> => {
    // TODO: Verify with backend userForm details
    try {
      const feedback: IFeedback = {
        type: 200,
        status: "Success",
        message: "Register successful",
      };
      return feedback;
    } catch (error) {
      const feedback: IFeedback = {
        type: 500,
        status: "Error",
        message: "Register failed",
      };
      return feedback;
    }
  };

  const login = async (userForm?: ILoginFormType): Promise<IFeedback> => {
    let feedback: IFeedback = {
      type: 200,
      status: "Success",
      message: "Login successful",
    };

    try {
      const response = await axios.post(
        "http://localhost:5138/api/OTP/send-code",
        {
          email: userForm?.email,
        }
      );

      if (response.status === 200) {
        feedback = {
          ...feedback,
          body: response.data,
        };
      } else {
        feedback = {
          type: response.status,
          status: "Error",
          message: `Unexpected response status: ${response.status}`,
        };
      }
    } catch (error) {
      feedback = {
        type: 500,
        status: "Error",
        message: error instanceof Error ? error.message : "Unknown error",
      };
    }

    console.log(feedback);
    return feedback;
  };

  const approveOTP = async (otp: number): Promise<IFeedback> => {
    sessionStorage.setItem("user", JSON.stringify(userLoggedIn));
    // TODO: Permissions based on user role after login
    // TODO: Communicate with backend before setting authenticated to true
    try {
      const feedback: IFeedback = {
        type: 200,
        status: "Success",
        message: "Login successful",
      };

      feedback.type === 200 && setIsAuthenticated(true);
      return feedback;
    } catch (error) {
      const feedback: IFeedback = {
        type: 500,
        status: "Error",
        message: "Login failed",
      };
      return feedback;
    }
  };

  const logout = () => {
    // TODO: Logout logic
    setIsAuthenticated(false);
    setHasPermission(false);
  };

  const setPermission = (permission: boolean) => {
    setHasPermission(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        onboardingEmail,
        onboardingName,
        userLoggedIn,
        isAuthenticated,
        hasPermission,
        createAccount,
        login,
        logout,
        approveOTP,
        setUserLoggedIn,
        setPermission,
        setOnboardingEmail,
        setOnboardingName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
