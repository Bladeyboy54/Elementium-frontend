import React from "react";
import "./index.css";
import LogoNoText from "../../assets/logo-notext.svg";
import { useNavigate } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";


export const Error404 = () => {

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return(
    <>
      <div className="navigate-back-404" onClick={navigateBack}>
        <TbArrowLeft
          color="#080808"
          className="navigate-back-icon-404"
        />
      </div>
      <div className="PageContainer-404">

        <div className="columns-404">
          <div className="ErrorColumn1-404">
            <h1>404</h1>
            <p>Page not found</p>
          </div>
          <div className="ErrorColumn2-404">
            <img src={LogoNoText} className="logoNoText-404" />
          </div>
        </div>
      </div>
    </>
  )
};
