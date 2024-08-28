import React, { useEffect, useState } from "react";
import atomImg from "../../assets/logo-notext-black.svg";
import ProfileActionsComponent from "../../components/ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import TransactionHistoryCardComponent from "../../components/ProfileComponents/TransactionHistoryCardComponent/TransactionHistoryCardComponent";
import CurrentInvestmentsComponent from "../../components/CurrentInvestmentsComponent/CurrentInvestmentsComponent";
import styles from "./overview-styles-index.module.scss";
import { fetchData } from "../../services/GetUser";

const Overview = () => {
  const [user, setUser] = useState<any>({username: "dummy", email: "dummy"});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((data) => {
      setUser(data);
      setTimeout(() => setLoading(false), 1000);
    });
  }, [fetchData]);

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
              {user.username != "dummy" ? (
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
                { loading ? null :
                  <div className={styles.plaqueInfo}>
                    {user.username != null ? (
                      <>
                        <p>
                          <span className={styles.boldText}>
                            {user.username}
                          </span>{" "}
                          {user.email}
                        </p>
                        <h3>5355 **** **** 2546</h3>
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
                }
                <img className={styles.atomImg} src={atomImg} alt="atom" />
              </div>
              {/* end of Plaque */}

              {/* Profile Actions Component */}
              <ProfileActionsComponent user={user} />

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
