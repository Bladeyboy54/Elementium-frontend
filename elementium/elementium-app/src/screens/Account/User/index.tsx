import React from "react";
import "./index.css";
import { Sidebar } from "../../../elements/Sidebar";
import atomImg from "../../../assets/logo-notext-black.svg";
import ProfileActionsComponent from "../../../components/ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import TransactionHistoryCardComponent from "../../../components/ProfileComponents/TransactionHistoryCardComponent/TransactionHistoryCardComponent";

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



            {/* Plaque */}
            <div className="plaque">
              <div className="temp-shimmer"></div>
              <div className="plaque-info">
                <p><span className="bold-text">Felix</span> King</p>
                <h3>5355 **** **** 2546</h3>
                <span className="plaque-date">08/26</span>
              </div>
              <img className="atom-img" src={atomImg} alt="atom" />
            </div> 
            {/* end of Plaque */}


            {/* Profile Actions Component */}
            <ProfileActionsComponent />


            {/* recent transactions */}
            <div className="recent-transactions">
              <div className="recent-transactions-block">
                <h2>Recent Transactions</h2>
                <div className="column-titles">
                  <p>Type</p>
                  <p>Recipient</p>
                  <p>Amount</p>
                </div>
                <div className="scroll-history">
                  <TransactionHistoryCardComponent type="sent" recipient="1234" amount="14058"/>
                  <TransactionHistoryCardComponent type="received" recipient="1234" amount="14058" />
                  <TransactionHistoryCardComponent type="withdrew" recipient="1234" amount="14058" />
                  <TransactionHistoryCardComponent type="sent" recipient="1234" amount="14058" />

                </div>
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
