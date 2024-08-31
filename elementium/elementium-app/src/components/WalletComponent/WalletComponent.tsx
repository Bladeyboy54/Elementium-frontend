import React, { useEffect, useState } from "react";
import styles from "./WalletComponent-styles.module.scss";
import { GetWallet } from "../../services/GetWallet";
import ProfileActionsComponent from "../ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";
import { fetchAccountData } from "../../services/GetAccount";
import { useAuth } from "../../utility/global/auth/authProvider";
import { Market } from "../../screens/Market";
import { NavLink } from "react-router-dom";

const WalletComponent = () => {
  const [wallet, setWallet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [accountData, setAccountData] = useState<any>(null);

  //demo userid to plug into the gerwalllet function
  let userId = 1;

  const { userLoggedIn } = useAuth();
  console.log("LOOK HERE!!", userLoggedIn);
  

  useEffect(() => {
    GetWallet(userLoggedIn).then((data) => {
      console.log(data);
      setWallet(data);
      setLoading(false);
    });

    fetchAccountData(userLoggedIn).then((data) => {
      setAccountData(data);
    });
  }, []);

  const upgradeQualifier = () => {
    switch (accountData?.accountStatusId) {
      case 1:
        if (
          accountData?.balance_h2 >=
          accountData?.status.total_amount_criteria
        ) {
          return (
            <p>
              You're eligable for an account upgrade! Click{" "}
              <span>here</span> to claim your <span>Alkali Account</span>{" "}
              status!
            </p>
          );
        } else {
         return null;
        }
      case 2:
        if (
          accountData?.balance_li >=
          accountData?.status.total_amount_criteria
        ) {
          return (
            <p>
              You're eligable for an account upgrade! Click{" "}
              <span>here</span> to claim your <span>Alkali Account</span>{" "}
              status!
            </p>
          );
        } else {
         return null;
        }
      case 3:
        if (
          accountData?.balance_pd >=
          accountData?.status.total_amount_criteria
        ) {
          return (
            <p>
              You're eligable for an account upgrade! Click{" "}
              <span>here</span> to claim your <span>Alkali Account</span>{" "}
              status!
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
      <div className={styles.main}>
        {loading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            <div className={styles.content}>
              {wallet ? (
                wallet.balance_h2 > 0 ||
                wallet.balance_li > 0 ||
                wallet.balance_pd > 0 ||
                wallet.balance_xe > 0 ? (
                  <>
                    <h2>Current Investments:</h2>
                    <div>
                      {wallet.balance_h2 > 0 ? (
                        <p>H2: {wallet.balance_h2}</p>
                      ) : null}
                      {wallet.balance_li > 0 ? (
                        <p>Li: {wallet.balance_li}</p>
                      ) : null}
                      {wallet.balance_pd > 0 ? (
                        <p>Pd: {wallet.balance_pd}</p>
                      ) : null}
                      {wallet.balance_xe > 0 ? (
                        <p>Xe: {wallet.balance_xe}</p>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <div>No Investments.</div>
                )
              ) : (
                <div>Wallet not found.</div>
              )}
              {wallet.balance_xe <= 0 ? (
                <p>
                  Not seeing an Element ur looking for? Either you're out of
                  that element, or you need to upgrade to gain access to more
                  elements.
                </p>
              ) : null}
              {/* {accountData ? (
                <>
                  <h3>Account data:</h3>
                  {upgradeQualifier()}
                  <p>
                    Account type: <span>{accountData?.status.status_name}</span>
                  </p>
                </>
              ) : null} */}
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
        )}
      </div>
    </>
  );
};

export default WalletComponent;
