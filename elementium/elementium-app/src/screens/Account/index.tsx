import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";

export const Account = () => {
  return (
    <div className="account">
      <Outlet />
    </div>
  );
};
