import React, { useEffect, useState } from "react";
import styles from "./WalletComponent-styles.module.scss";
import { GetWallet } from "../../services/GetWallet";
import ProfileActionsComponent from "../ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import { fetchAccountData } from "../../services/GetAccount";
import { useAuth } from "../../utility/global/auth/authProvider";
import { Market } from "../../screens/Market";
import { NavLink } from "react-router-dom";
import { levelUpAccount } from "../../services/LevelUpAccount";
import loadingGif from "../../assets/icons/loading.gif";
import h2Icon from "../../assets/icons/h2.svg";
import liIcon from "../../assets/icons/li.svg";
import pdIcon from "../../assets/icons/pd.svg";
import xeIcon from "../../assets/icons/xe.svg";

const WalletComponent = () => {
  const [wallet, setWallet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [accountData, setAccountData] = useState<any>(null);

  const [isActive, setIsActive] = useState(false);

  const { userLoggedIn } = useAuth();

  useEffect(() => {
    GetWallet(userLoggedIn).then((data) => {
      setWallet(data);
      setLoading(false);

    });

    fetchAccountData(userLoggedIn).then((data) => {
      setAccountData(data);
      console.log(
        "ACCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCc"
      );
      setIsActive(data.active);
    });
  }, [userLoggedIn, GetWallet, fetchAccountData]);

  const refreshData = () => {
    setLoading(true);
    GetWallet(userLoggedIn).then((data) => {
      setWallet(data);
      setLoading(false);
    });

    fetchAccountData(userLoggedIn).then((data) => {
      setAccountData(data);
    });
  };

  const levelAccount = () => {
    levelUpAccount(userLoggedIn).then(() => {
      setLoading(true);
      refreshData();
    });
  };

  const upgradeQualifier = () => {
    switch (accountData?.accountStatusId) {
      case 1:
        if (
          accountData?.balance_h2 >= accountData?.status.total_amount_criteria
        ) {
          return (
            <p>
              You're eligable for an account upgrade! Click{" "}
              <span className={styles.levelUpText} onClick={levelAccount}>
                here
              </span>{" "}
              to claim your{" "}
              <span className={styles.levelUpText} onClick={levelAccount}>
                Alkali Account
              </span>{" "}
              status!
              <p>
                Doing so will result in the following benifits:{" "}
                <p>Annual Interest Rate: 1%</p>{" "}
                <p>But with a 20 H2 Per transaction.</p>
              </p>
            </p>
          );
        } else {
          return null;
        }
      case 2:
        if (
          accountData?.balance_li >= accountData?.status.total_amount_criteria
        ) {
          return (
            <p>
              You're eligable for an account upgrade! Click{" "}
              <span className={styles.levelUpText} onClick={levelAccount}>
                here
              </span>{" "}
              to claim your{" "}
              <span className={styles.levelUpText} onClick={levelAccount}>
                Transition Account
              </span>{" "}
              status!
              <p>
                Doing so will result in the following benifits:{" "}
                <p>Annual Interest Rate: 2%</p>{" "}
                <p>But with a 17.5 H2 Per transaction.</p>
              </p>
            </p>
          );
        } else {
          return null;
        }
      case 3:
        if (
          accountData?.balance_pd >= accountData?.status.total_amount_criteria
        ) {
          return (
            <p>
              You're eligable for an account upgrade! Click{" "}
              <span className={styles.levelUpText} onClick={levelAccount}>
                here
              </span>{" "}
              to claim your{" "}
              <span className={styles.levelUpText} onClick={levelAccount}>
                Noble Account
              </span>{" "}
              status!
              <p>
                Doing so will result in the following benifits:{" "}
                <p>Annual Interest Rate: 3%</p>{" "}
                <p>But with a 12.5 H2 Per transaction.</p>
              </p>
            </p>
          );
        } else {
          return null;
        }
      case 4:
        return (
          <p>
            You've reached the final account tier: <span>Noble</span>
          </p>
        );
      default:
        return null;
    }
  };

  console.log(accountData);

  return (
    <>
      {loading ? (
        <div className={styles.main}>
          <div className={styles.loadingHolder}>
            <img className={styles.loadingGif} src={loadingGif} alt="loading" />
          </div>
        </div>
      ) : (
        <div className={styles.main}>
          {loading ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            <>
              {isActive ? (
                <>
                  <div className={styles.content}>
                    {wallet ? (
                      wallet.balance_h2 > 0 ||
                      wallet.balance_li > 0 ||
                      wallet.balance_pd > 0 ||
                      wallet.balance_xe > 0 ? (
                        <div className={styles.currentInvestmentsBlock}>
                          <h2>Current Investments:</h2>
                          <div className={styles.investments}>
                            {wallet.balance_h2 > 0 ? (
                              <div className={styles.curreny}>
                                <h5 className={styles.h2}>Hydrogen:</h5>
                                <p className={[
                                    styles.alignCurrency,
                                    styles.h2,
                                  ].join(" ")}>
                                  <img
                                    className={styles.currencyIcon}
                                    src={h2Icon}
                                  />
                                  x {wallet.balance_h2.toLocaleString()}
                                </p>
                              </div>
                            ) : null}
                            {wallet.balance_li > 0 ? (
                              <div className={styles.curreny}>
                                <h5 className={styles.li}>Lithium:</h5>
                                <p className={[
                                    styles.alignCurrency,
                                    styles.li,
                                  ].join(" ")}>
                                  <img
                                    className={styles.currencyIcon}
                                    src={liIcon}
                                  />
                                  x {wallet.balance_li.toLocaleString()}
                                </p>
                              </div>
                            ) : null}
                            {wallet.balance_pd > 0 ? (
                              <div className={styles.curreny}>
                                <h5 className={styles.pd}>Palladium:</h5>
                                <p className={[
                                    styles.alignCurrency,
                                    styles.pd,
                                  ].join(" ")}>
                                  <img
                                    className={styles.currencyIcon}
                                    src={pdIcon}
                                  />
                                  x {wallet.balance_pd.toLocaleString()}
                                </p>
                              </div>
                            ) : null}
                            {wallet.balance_xe > 0 ? (
                              <div className={styles.curreny}>
                                <h5 className={styles.xe}>Xenon:</h5>
                                <p
                                  className={[
                                    styles.alignCurrency,
                                    styles.xe,
                                  ].join(" ")}
                                >
                                  <img
                                    className={styles.currencyIcon}
                                    src={xeIcon}
                                  />
                                  x {wallet.balance_xe.toLocaleString()}
                                </p>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ) : (
                        <div>No Investments.</div>
                      )
                    ) : (
                      <div>Wallet not found.</div>
                    )}
                    {wallet.balance_xe <= 0 ? (
                      <p>
                        Not seeing the Element you're looking for? You may be out, or will need to head over to the market to get more!
                      </p>
                    ) : null}
                    {accountData && (
                      <>
                        <h3>Account data:</h3>
                        {upgradeQualifier()}
                        <br />
                        <p>
                          Account type:{" "}
                          <span className={styles.coolText}>
                            {accountData?.status.status_name || "No account"}
                          </span>
                        </p>
                        {accountData?.status.status_name !== "Noble" ? (
                          <>
                            <p>
                              Required Elements to be eligable for upgrade:{" "}
                              <p>
                                {accountData?.status.transactions_criteria}:{" "}
                                {accountData?.status.total_amount_criteria}
                              </p>
                            </p>
                            <br />
                          </>
                        ) : null}
                        {accountData?.status.status_name !== "Reactive" ? (
                          <>
                            <p>Current benifits:</p>
                            <p>
                              Annual Interest Rate:{" "}
                              {accountData?.status.annual_interest_rate * 100}%
                            </p>
                          </>
                        ) : null}
                        <p>
                          Current Fee rate:{" "}
                          <span>
                            {" "}
                            {accountData?.status.transaction_fee} H2 Per
                            transaction.
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                  <h3>Add to your investments?</h3>
                  <p>
                    Head over to the{" "}
                    <NavLink to={"/market"}>
                      <span>market place</span>
                    </NavLink>
                    to purchase or trade for more elements
                  </p>
                </>
              ) : (
                <p>Account Frozen</p>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default WalletComponent;
