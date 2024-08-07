import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

// Wrapper for private routes
export const PrivateRoute: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/onboarding" />;
  }

  return <>{children}</>;
};

// Wrapper for public routes
export const PublicRoute: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};
