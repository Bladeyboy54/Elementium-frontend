import React from "react";
import "./index.css";
import { Sidebar } from "../../../elements/Sidebar";

export const User = () => {
  
  return (
    <>
    <div className="main">
      <div className="side-bar-section"></div>
      <div className="content">

        <div className="welcome-title-section">
          <h1>Welcome, Mr. King</h1>
          <div className="filler-line"></div>
        </div>

        <div className="info">
          <div className="center-section">
            <div className="plaque">
              <div className="temp-shimmer"></div>
              <div className="plaque-info">
                <p><span className="bold-text">Felix</span> King</p>
                <h3>5355 **** **** 2546</h3>
                <span className="plaque-date">08/26</span>
              </div>
            </div>
          </div>
          <div className="right-section"></div>
          
        </div>
        

      </div>
    </div>     
    </>
  );
};
