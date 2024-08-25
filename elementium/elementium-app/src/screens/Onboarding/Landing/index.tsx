import React from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../elements/Input/Button";
import { TbArrowNarrowRight } from "react-icons/tb";
import { ReactComponent as Logo } from "../../../assets/logo-light.svg";

export const Landing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToLogin = (screen: string) => {
    navigate(`/onboarding/${screen}`);
  };
  return (
    <div className="landing">
      <div className="landing-top">
        <Logo className="" />
        <div className="landing-heading">Welcome to Elementium</div>
      </div>
      <div className="landing-cta">
        <Button
          style={{ width: "300px" }}
          onClick={(e) => {
            goToLogin("login");
          }}
        >
          Login
          <TbArrowNarrowRight />
        </Button>
        <Button
          textColor="#EDF2D6"
          borderColor="#EDF2D6"
          backgroundColor="#090909"
          hoverTextColor="#EDF2D6"
          onClick={(e) => {
            goToLogin("create-account");
          }}
        >
          Create Account
          <TbArrowNarrowRight />
        </Button>
      </div>
    </div>
  );
};
