import React from "react";
import "./index.css";
import logoNoText from "../../assets/logo-notext-black.svg";
import TransActionComponent from "./TransActionComponent/TransActionComponent";
export const Transactions = () => {


  return(

    <>
      <div className="transactionsPage">

        {/* ////////////////////////Page Title Box////////////////////////////////////// */}
        <div className="pageTitleBox">
          
          <h1>Transactions</h1> 
          <div className="filler-line"></div>
        </div>

        <div className="mainBody">


          {/* //////////////////////Plaque Section/////////////////// */}
          <div className="userOverviewPlaque">
            <div className="plaqueAddon"></div>
            <div className="plaqueInfo">
              <p><span className="usernameText">Felix</span> King</p>
              <h3>5355 **** **** 2546</h3>
              <span className="accountDate">08/26</span>
            </div>
                <img className="logoNoText" src={logoNoText} alt="atom" />
          </div>
          {/* //////////////////////End Plaque Section/////////////////// */}

          {/* /////////////////////Transactions Actions//////////////////// */}

            <TransActionComponent/>

        </div>
      </div>
    </>
    
    
    
    
  );
};
