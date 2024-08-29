import React, { useEffect, useState } from "react";
import styles from "./WalletComponent-styles.module.scss";
import { GetWallet } from "../../services/GetWallet";
import ProfileActionsComponent from "../ProfileComponents/ProfileActionsComponent/ProfileActionsComponent";

const WalletComponent = () => {
  const [wallet, setWallet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  //demo userid to plug into the gerwalllet function
  let userId = 1;

  useEffect(() => {
    GetWallet(userId).then((data) => {
      console.log(data);
      setWallet(data);
      setLoading(false);
    });
  }, []);

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
            </div>
            <h3>Add to your investments?</h3>
            <br/>
            <ProfileActionsComponent />
          </>
        )}
      </div>
    </>
  );
};

export default WalletComponent;
