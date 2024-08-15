import React, { CSSProperties } from "react";
import "./index.css";
import Button from "../Button";

interface IForm extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  subheading?: string;
  customSubheading?: React.ReactNode;
  children?: React.ReactNode;
  submitButton?: React.ReactNode;
  style?: CSSProperties;
}

export const Form: React.FC<IForm> = ({
  heading,
  subheading,
  customSubheading,
  children,
  submitButton,
  style,
  ...props
}) => {
  return (
    <div className="form" style={style}>
      <div className="form-heading-wrap h1">
        <div className="form-heading">{heading}</div>
        {customSubheading ? (
          customSubheading
        ) : (
          <div className="form-subheading">{subheading}</div>
        )}
      </div>
      <div className="form-input-wrap">{children}</div>
      {submitButton}
    </div>
  );
};
