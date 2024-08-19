import React, { CSSProperties } from "react";
import "./index.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  textFont?: string;
  textWeight?: string;
  width?: string;
  height?: string;
  padding?: string;
  gap?: number;
  align?: string;
  justify?: string;
  borderColor?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  children?: React.ReactNode; // Added to accept any JSX elements
}

export const Button: React.FC<ButtonProps> = ({
  label = "",
  backgroundColor = "#EDF2D6",
  textColor = "#060604",
  textSize = "0.8rem",
  textFont = "Satoshi",
  textWeight = "700",
  width = "",
  height = "auto",
  padding = "10px 15px",
  gap = 10,
  align = "center",
  justify = "center",
  borderColor = "transparent",
  borderRadius = "15px",
  hoverBackgroundColor = "#050406",
  hoverTextColor = backgroundColor,
  hoverBorderColor = backgroundColor,
  style,
  children,
  ...props
}) => {
  const defaultStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor,
    color: textColor,
    fontSize: textSize,
    fontFamily: textFont,
    fontWeight: textWeight,
    width,
    height,
    padding,
    gap: gap,
    border: `1px solid ${borderColor}`,
    borderRadius,
    textAlign: "center",
    cursor: "pointer",
    transition:
      "background-color 0.25s ease, color 0.15s ease, border-color 0.15s ease",
  };

  const mouseEnter = (e: any) => {
    (e.target as HTMLDivElement).style.backgroundColor = hoverBackgroundColor;
    (e.target as HTMLDivElement).style.color = hoverTextColor;
    (e.target as HTMLDivElement).style.borderColor = hoverBorderColor;
  };

  const mouseLeave = (e: any) => {
    (e.target as HTMLDivElement).style.backgroundColor = backgroundColor;
    (e.target as HTMLDivElement).style.color = textColor;
    (e.target as HTMLDivElement).style.borderColor = borderColor;
  };

  return (
    <div
      style={{
        ...defaultStyle,
        ...style,
        justifyContent: justify,
        alignItems: align,
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...props}
    >
      {children}
      {label && (
        <div
          className="btn-text"
          style={{ marginLeft: children ? "0px" : "0", background: "" }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Button;
