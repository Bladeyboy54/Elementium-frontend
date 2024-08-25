import React, { useState } from "react";
import styles from "./ProfileActionsComponent-styles.module.scss";
import sendIcon from "../../../assets/icons/upload.svg";
import receiveIcon from "../../../assets/icons/download.svg";

const ProfileActionsComponent = () => {
  const [usingExtraActions, setUsingExtraActions] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          {/* info */}
          <div className={styles.info}>
            {/* TODO: Using the section class here in the array will open the door to do some cool things later
                    like changing the colour of the text if the account is eligable for an upgrade or something
                    along those lines. Right now though, its not doing anything, so we should remove it if we 
                    choose not to add that kind of feature */}

            <div
              className={[styles.accountTypeSection, styles.infoSection].join(
                " "
              )}
            >
              <p className={styles.title}>Account Type</p>
              <p className={styles.value}>Transition</p>
            </div>
            <div
              className={[styles.transactionsSection, styles.infoSection].join(
                " "
              )}
            >
              <p className={styles.title}>Balance</p>
              <p className={styles.value}>ZAR 24,000.00</p>
            </div>
            <div
              className={[styles.cardsSection, styles.infoSection].join(" ")}
            >
              <p className={styles.title}>Currency</p>
              <p className={styles.value}>ZAR</p>
            </div>
          </div>
          {/* end of info */}

          {/* actions */}
          <div className={styles.actions}>
            {usingExtraActions ? (
              <>
                <div
                  onClick={() => setUsingExtraActions(false)}
                  className={[styles.button, styles.moreOptionsButton].join(
                    " "
                  )}
                >
                  <p>&#60; Back </p>
                </div>
                <div className={[styles.button, styles.addElements].join(" ")}>
                  <img src={sendIcon} />
                  <p>Add Elements</p>
                </div>
              </>
            ) : (
              <>
                <div className={[styles.button, styles.sendButton].join(" ")}>
                  <img src={sendIcon} />
                  <p>Send</p>
                </div>

                <div
                  className={[styles.button, styles.receiveButton].join(" ")}
                >
                  <img src={receiveIcon} />
                  <p>Receive</p>
                </div>

                <div
                  className={[styles.button, styles.withdrawButton].join(" ")}
                >
                  <img src={receiveIcon} />
                  <p>Withdraw</p>
                </div>

                <div
                  onClick={() => setUsingExtraActions(true)}
                  className={[styles.button, styles.moreOptionsButton].join(
                    " "
                  )}
                >
                  <p>...</p>
                </div>
              </>
            )}
          </div>
          {/* end of actions */}
        </div>
      </div>
    </>
  );
};

export default ProfileActionsComponent;
