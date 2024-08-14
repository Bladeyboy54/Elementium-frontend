import React, { createContext, useContext, useState, ReactNode } from "react";

// Shape of context
interface AuthContextType {
  isAuthenticated: boolean;
  hasPermission: boolean;
  login: (userForm: LoginFormType) => void;
  logout: () => void;
  setPermission: (permission: boolean) => void;
}

interface LoginFormType {
  email: string;
  password: string;
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const login = (userForm: LoginFormType) => {
    // TODO: Implement your login logic here
    setIsAuthenticated(true);
    sessionStorage.setItem("user", JSON.stringify(userForm));
    // TODO: Permissions based on user role after login
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
        isAuthenticated,
        hasPermission,
        login,
        logout,
        setPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
