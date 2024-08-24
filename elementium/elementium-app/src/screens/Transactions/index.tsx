import React from "react";
import "./index.css";
import logoNoText from "../../assets/logo-notext-black.svg";
import TransActionComponent from "./TransActionComponent/TransActionComponent";
import TransHistoryCardComponent from "./TransHistoryCardComponent/TransHistoryCardComponent";


export const Transactions = () => {


  return(

    <>
      <div className="transactionsPage">

        {/* ////////////////////////Page Title Box////////////////////////////////////// */}
        <div className="pageTitleBox">
          
          <h1>Transactions</h1> 
          <div className="filler-line"></div>
        </div>

        <div className="transactionMainBody">


          {/* //////////////////////Plaque Section/////////////////// */}
          <div className="transactionUserOverviewPlaque">
            <div className="transactionPlaqueAddon"></div>
            <div className="transactionPlaqueInfo">
              <p><span className="transactionUsernameText">Felix</span> King</p>
              <h3>5355 **** **** 2546</h3>
              <span className="transactionAccountDate">08/26</span>
            </div>
                <img className="logoNoText-transaction" src={logoNoText} alt="atom" />
          </div>
          {/* //////////////////////End Plaque Section/////////////////// */}

          {/* /////////////////////Transactions Actions//////////////////// */}

          <TransActionComponent/>

          {/* ////////////////////Transaction History///////////////////////// */}

          <div className="transactionHistory">
            <div className="transactionHistoryBlock">
              <h2>Transaction History</h2>
              <div className="transactionColumnTitles">
                <p>Type</p>
                <p>Recipient</p>
                <p>Amount</p>
              </div>
              <div className="transactionScrollHistory">
                <TransHistoryCardComponent type="sent" recipient="1234" amount="14058" />
                <TransHistoryCardComponent type="transfer" recipient="5678" amount="3250" />
                <TransHistoryCardComponent type="withdrew" recipient="1234" amount="14058" />
                <TransHistoryCardComponent type="transfer" recipient="5678" amount="3250" />
                <TransHistoryCardComponent type="sent" recipient="1234" amount="14058" />
                <TransHistoryCardComponent type="transfer" recipient="5678" amount="3250" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
    
    
    
    
  );
};
