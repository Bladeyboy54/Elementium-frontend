import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";

export const Landing = () => {
  const location = useLocation();
  return <div>Landing {location.pathname}</div>;
};
