import React, { CSSProperties } from "react";
import "./index.css";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
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
  borderColor?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  children?: React.ReactNode; // Added to accept any JSX elements
}

export const Button: React.FC<ButtonProps> = ({
  label = "...",
  backgroundColor = "#EDF2D6",
  textColor = "#060604",
  textSize = "0.8rem",
  textFont = "Satoshi",
  textWeight = "700",
  width = "",
  height = "auto",
  padding = "10px 15px",
  gap = 10,
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

  return (
    <div
      style={{ ...defaultStyle, ...style }}
      onMouseEnter={(e) => {
        (e.target as HTMLDivElement).style.backgroundColor =
          hoverBackgroundColor;
        (e.target as HTMLDivElement).style.color = hoverTextColor;
        (e.target as HTMLDivElement).style.borderColor = hoverBorderColor;
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLDivElement).style.backgroundColor = backgroundColor;
        (e.target as HTMLDivElement).style.color = textColor;
        (e.target as HTMLDivElement).style.borderColor = borderColor;
      }}
      {...props}
    >
      {children}
      {label && (
        <div
          className="button-text"
          style={{ marginLeft: children ? "0px" : "0", background: "" }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Button;
