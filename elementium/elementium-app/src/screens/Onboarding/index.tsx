import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";

export const Onboarding = () => {
  return (
    <div>
      Onboarding
      <Outlet />
    </div>
  );
};
