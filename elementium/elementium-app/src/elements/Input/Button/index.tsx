import React, { useState, CSSProperties, useMemo } from "react";
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
  children?: React.ReactNode;
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
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: align,
      justifyContent: justify,
      backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
      color: isHovered ? hoverTextColor : textColor,
      fontSize: textSize,
      fontFamily: textFont,
      fontWeight: textWeight,
      width,
      height,
      padding,
      gap: gap,
      border: `1px solid ${isHovered ? hoverBorderColor : borderColor}`,
      borderRadius,
      textAlign: "center",
      cursor: "pointer",
      transition:
        "background-color 0.25s ease, color 0.15s ease, border-color 0.15s ease",
    }),
    [
      align,
      justify,
      isHovered,
      backgroundColor,
      hoverBackgroundColor,
      textColor,
      hoverTextColor,
      borderColor,
      hoverBorderColor,
      textSize,
      textFont,
      textWeight,
      width,
      height,
      padding,
      gap,
      borderRadius,
    ]
  );

  return (
    <div
      style={{ ...defaultStyle, ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      {label && (
        <div
          className="btn-text"
          style={{ marginLeft: children ? "0px" : "0" }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Button;
