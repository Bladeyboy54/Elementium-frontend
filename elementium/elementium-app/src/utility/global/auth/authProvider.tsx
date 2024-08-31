import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";

const url = (endpoint: string): string => {
  return "http://localhost:5138/api/" + endpoint;
};

export interface User {
  id?: number;
  email: string;
  username: string;
  avatar?: string;
  role: "user" | "admin" | "";
  createdAt?: string;
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
  createAccount: (newUserForm: NewUser) => Promise<IFeedback>;
  login: (userForm: ILoginFormType) => Promise<IFeedback>;
  approveOTP: (otp: number) => Promise<IFeedback>;
  setUserLoggedIn: (user: User | null) => void;
  setPermission: (permission: boolean) => void;
  setOnboardingEmail: (email: string | null) => void;
  setOnboardingName: (name: string | null) => void;
  logout: () => void;
}

interface ILoginFormType {
  Email: string;
  Password: string;
}

export interface IFeedback {
  type: number;
  status: "Success" | "Warning" | "Error" | null;
  message: string | null;
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
  const [onboardingName, setOnboardingName] = useState<string | null>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = useState<User | null>({
    id: 1,
    email: "",
    username: "",
    avatar: "",
    role: "",
  });
  let feedback: IFeedback = {
    type: 0,
    status: null,
    message: "",
  };

  const sendOTP = async (userForm: any) => {
    try {
      const response = await axios.post(url("OTP/send-code"), {
        email: userForm?.email,
      });

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
  };

  const createAccount = async (newUserForm?: NewUser): Promise<IFeedback> => {
    // Post newUserForm to backend
    const response = await axios.post(url("Register"), newUserForm);
    const res: User = response.data[0];

    // If the response contains an email, send the OTP
    if (res.email) {
      await sendOTP(res); // Ensure sendOTP is awaited within an async function
    }

    try {
      sessionStorage.setItem("user", JSON.stringify(res));
      const feedback: IFeedback = {
        type: 200,
        status: "Success",
        message: "Register successful",
        body: res,
      };
      return feedback;
    } catch (error) {
      const feedback: IFeedback = {
        type: 500,
        status: "Error",
        message: "Register failed",
        body: error,
      };
      return feedback;
    }
  };

  const login = async (userForm?: ILoginFormType): Promise<IFeedback> => {
    const response: any = await axios.post(url("Login"), userForm);
    const res: any = response?.data?.body?.$values[0];
    console.log(res);

    // If the response contains an email, send the OTP
    if (res) {
      // await sendOTP(res); // Ensure sendOTP is awaited within an async function
      setOnboardingName(res.username);
      setUserLoggedIn(res);
    } else {
      console.log("res: ", res);
      const feedback: IFeedback = {
        type: 500, // Return the actual status code if available
        status: "Error",
        message: "Unknown server error",
        body: { res }, // Include response data if available
      };
      return feedback;
    }

    try {
      const feedback: IFeedback = {
        type: 200,
        status: "Success",
        message: "Login successful",
        body: res,
      };
      return feedback;
    } catch (error: any) {
      // Log the error for debugging purposes
      console.error("Login error:", error);

      const feedback: IFeedback = {
        type: 500, // Return the actual status code if available
        status: "Error",
        message: "Login failed",
        body: error?.response?.data || error, // Include response data if available
      };
      return feedback;
    }
  };

  const approveOTP = async (otp: number): Promise<IFeedback> => {
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
