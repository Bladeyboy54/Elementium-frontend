import React, { useEffect, useState } from "react";
import atomImg from "../../assets/logo-notext-black.svg";
import ProfileActionsComponent from "../../components/ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import TransactionHistoryCardComponent from "../../components/ProfileComponents/TransactionHistoryCardComponent/TransactionHistoryCardComponent";
import CurrentInvestmentsComponent from "../../components/CurrentInvestmentsComponent/CurrentInvestmentsComponent";
import styles from "./overview-styles-index.module.scss"

const Overview = () => {

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
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.welcomeTitleSection}>
            {user.username != null ? <h1>Welcome, {user.username}</h1> : <h1>Welcome, Mr. King</h1>}
            <div className={styles.fillerLine}></div>
          </div>

          <div className={styles.info}>
            <div className={styles.centerSection}>
              {/* Plaque */}
              <div className={styles.plaque}>
                <div className={styles.tempShimmer}></div>
                <div className={styles.plaqueInfo}>
                  {user.username != null ?(<p>
                    <span className={styles.boldText}>{user.username}</span> {user.email}
                  </p>):(<p>
                    <span className={styles.boldText}>Felix</span> King
                  </p>)}
                  <h3>5355 **** **** 2546</h3>
                  <span className={styles.plaqueDate}>08/26</span>
                </div>
                <img className={styles.atomImg} src={atomImg} alt="atom" />
              </div>
              {/* end of Plaque */}

              {/* Profile Actions Component */}
              <ProfileActionsComponent />

              {/* recent transactions */}
              <div className={styles.recentTransactions}>
                <div className={styles.recentTransactionsBlock}>
                  <h2>Recent Transactions</h2>
                  <div className={styles.columnTitles}>
                    <p>Type</p>
                    <p>Recipient</p>
                    <p>Amount</p>
                  </div>
                  <div className={styles.scrollHistory}>
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
            <div className={styles.rightSection}>
              <CurrentInvestmentsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Overview;
