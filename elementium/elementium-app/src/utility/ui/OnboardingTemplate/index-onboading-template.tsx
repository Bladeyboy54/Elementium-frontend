import React, { ReactNode } from "react";
import "./index-onboading-template.css";
import { TbArrowLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo-light.svg";
import BackgroundImage from "../../../assets/img/bg/onboarding_img.jpg";
import Button from "../../../elements/Input/Button";

interface IOnboadingTemplateProps {
  //   backNavigation: string;
  pageHeading: string | ReactNode;
  form: ReactNode;
}

export const OnboadingTemplate: React.FC<IOnboadingTemplateProps> = ({
  //   backNavigation,
  pageHeading,
  form,
}) => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div className="onboarding-template">
      <div className="onboarding-template-navigate-back" onClick={navigateBack}>
        <TbArrowLeft
          color="#080808"
          className="onboarding-template-navigate-back-icon"
        />
      </div>
      <div className="onboarding-template-body">
        <img
          src={BackgroundImage}
          alt="Background"
          className="onboarding-template-body-bg"
        />
        <div className="onboarding-template-body-wrap">
          <div className="onboarding-template-body-left">
            <div className="onboarding-template-body-left-logo">
              <Logo />
            </div>
            <div className="onboarding-template-body-left-heading">
              {pageHeading}
            </div>
          </div>
          <div className="onboarding-template-body-right">{form}</div>
        </div>
      </div>
    </div>
  );
};
