import React, { useEffect, useState } from "react";
import atomImg from "../../assets/logo-notext-black.svg";
import ProfileActionsComponent from "../../components/ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import TransactionHistoryCardComponent from "../../components/ProfileComponents/TransactionHistoryCardComponent/TransactionHistoryCardComponent";
import CurrentInvestmentsComponent from "../../components/CurrentInvestmentsComponent/CurrentInvestmentsComponent";
import styles from "./overview-styles-index.module.scss";
import { fetchUserData } from "../../services/GetUser";
import { useAuth } from "../../utility/global/auth/authProvider";

const Overview = () => {
  const [user, setUser] = useState<any>({ username: "Felix", email: "King" });
  const [loading, setLoading] = useState(true);

  const { userLoggedIn } = useAuth(); //<-- this declaration already retrieves all the relavant userdata, but so that it doesn't
  // erase all the work I've already done before being informed on how to use, I'm just gonna pull the id from it to run the rest of my functionality

  useEffect(() => {
    fetchUserData(userLoggedIn).then((data) => {
      setUser(data[0]);
      setTimeout(() => setLoading(false), 1000);
      // console.log("USER ID OVerview ===>", user)
    });
  }, [fetchUserData]);



  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          {loading ? (
            <div className={styles.welcomeTitleSection}>
              <h1>Loading...</h1>
              <div className={styles.fillerLine}></div>
            </div>
          ) : (
            <div className={styles.welcomeTitleSection}>
              {user.username != "Felix" ? (
                <h1>Welcome, {user.username}</h1>
              ) : (
                <h1>Welcome, Mr. King</h1>
              )}
              <div className={styles.fillerLine}></div>
            </div>
          )}

          <div className={styles.info}>
            <div className={styles.centerSection}>
              {/* Plaque */}
              <div className={styles.plaque}>
                <div className={styles.tempShimmer}></div>
                {loading ? null : (
                  <div className={styles.plaqueInfo}>
                    {user.username != null ? (
                      <>
                        <p>
                          <span className={styles.boldText}>
                            {user.username}
                          </span>{" "}
                          {user.email}
                        </p>
                        <h3>
                          {user.cardNumbers
                            ? `${user.cardNumbers.slice(
                              0,
                              4
                            )} **** **** ${user.cardNumbers.slice(-4)}`
                            : "No card available"}
                        </h3>
                        <span className={styles.plaqueDate}>08/26</span>
                      </>
                    ) : (
                      <>
                        <p>
                          <span className={styles.boldText}>Felix</span> King
                        </p>

                        <h3>5355 **** **** 2546</h3>
                        <span className={styles.plaqueDate}>08/26</span>
                      </>
                    )}
                  </div>
                )}
                <img className={styles.atomImg} src={atomImg} alt="atom" />
              </div>
              {/* end of Plaque */}

              {/* Profile Actions Component */}
              {/* <ProfileActionsComponent user={user} /> */}

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

                  
                    {
                      user.account != null ? (
                        user.account.fromTransactions != null ? (
                          user.account.fromTransactions.map((item: any) => (
                            <div>
                              <TransactionHistoryCardComponent
                                type="sent"
                                recipient={item.toAccountId}
                                amount={item.amount}
                              />
                            </div>
                          ))
                        ) : (
                          <p>No Transactions Sent</p>
                        )
                      ) : (
                        <p>No account Available</p>
                      )
                    }

                    {
                      user.account != null ? (
                        user.account.toTransactions != null ? (
                          user.account.toTransactions.map((item: any) => (
                            <div>
                              <TransactionHistoryCardComponent
                                type="received"
                                recipient={item.toAccountId}
                                amount={item.amount}
                              />
                            </div>
                          ))
                        ) : (
                          <p>No Transactions Received</p>
                        )
                      ) : (
                        <p>No account Available</p>
                      )
                    }
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
