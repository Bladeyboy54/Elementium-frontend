import React from "react";
import "./index.css";
import Tilt from "react-parallax-tilt";
import { ReactComponent as Logo } from "../../../../assets/logo-notext.svg";
import { useNavigate } from "react-router-dom";

export const SectionLogo: React.FC = () => {
  const navigate = useNavigate();
  const goHome = (): void => {
    navigate("/");
  };
  return (
    <Tilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      gyroscope={true}
      className="section-logo-parallax"
    >
      <div className="section-logo-wrap" onClick={goHome}>
        <Logo className="logo" width="60px" height="60px" />
        <div className="logo-text">Elementium</div>
      </div>
    </Tilt>
  );
};
