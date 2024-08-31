import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";

export const Onboarding = () => {
  return (
    <div className="onboarding">
      <Outlet />
    </div>
  );
};
