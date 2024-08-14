import React from "react";
import "./index.css";

interface IPageNameProps {
  name: string;
  icon?: React.ReactElement;
}

export const PageName: React.FC<IPageNameProps> = ({ name }) => {
  return (
    <div className="page-name">
      <div className="page-name-text h1">{name}</div>
      <div className="page-name-line"></div>
    </div>
  );
};
