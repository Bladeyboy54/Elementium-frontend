import React, { useEffect, useState } from "react";
import "./index.css";
import { Sidebar } from "../../../elements/Sidebar";
import atomImg from "../../../assets/logo-notext-black.svg";
import ProfileActionsComponent from "../../../components/ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import TransactionHistoryCardComponent from "../../../components/ProfileComponents/TransactionHistoryCardComponent/TransactionHistoryCardComponent";
import CurrentInvestmentsComponent from "../../../components/CurrentInvestmentsComponent/CurrentInvestmentsComponent";

export const User = () => {

  // Temporary api call for demonstration purposes
  // example POST request: 
  //    {
  //    "username": "john",
  //    "email": "john@mail.com"
  //    }


  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5138/api/UsersInfo/3"); //temporary api call with hardcoded id, 
        //                                                                      changing this with a chosen id for now to demonstrate
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        <div className="side-bar-section"></div>
        <div className="content">
          <div className="welcome-title-section">
            {user.username != null ? <h1>Welcome, {user.username}</h1> : <h1>Welcome, Mr. King</h1>}
            <div className="filler-line"></div>
          </div>

          <div className="info">
            <div className="center-section">
              {/* Plaque */}
              <div className="plaque">
                <div className="temp-shimmer"></div>
                <div className="plaque-info">
                  {user.username != null ?(<p>
                    <span className="bold-text">{user.username}</span> {user.email}
                  </p>):(<p>
                    <span className="bold-text">Felix</span> King
                  </p>)}
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
                    <TransactionHistoryCardComponent
                      type="sent"
                      recipient="1234"
                      amount="14058"
                    />
                    <TransactionHistoryCardComponent
                      type="received"
                      recipient="1234"
                      amount="14058"
                    />
                    <TransactionHistoryCardComponent
                      type="withdrew"
                      recipient="1234"
                      amount="14058"
                    />
                    <TransactionHistoryCardComponent
                      type="sent"
                      recipient="1234"
                      amount="14058"
                    />
                    <TransactionHistoryCardComponent
                      type="sent"
                      recipient="1234"
                      amount="14058"
                    />
                    <TransactionHistoryCardComponent
                      type="sent"
                      recipient="1234"
                      amount="14058"
                    />
                    <TransactionHistoryCardComponent
                      type="sent"
                      recipient="1234"
                      amount="14058"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <CurrentInvestmentsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
