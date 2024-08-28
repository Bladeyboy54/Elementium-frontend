import React, { useState } from "react";
import styles from "./ProfileActionsComponent-styles.module.scss";
import sendIcon from "../../../assets/icons/upload.svg";
import receiveIcon from "../../../assets/icons/download.svg";
import { addCurrency } from "../../../services/AddCurrency";

const ProfileActionsComponent = (props: any) => {
  const user = props.user;

  const [usingExtraActions, setUsingExtraActions] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [addPayload, setAddPayload] = useState({ userId: 1, currency: "h2", amount: 0 });

  const closeModal = (e: any) => {
    //<-- chatGPT helped with this specific targetting to make sure that the user click doesn't propagate.
    if (e.target.classList.contains(styles.modal)) {
      setModalOpen(false);
    }
  };

  const handlePayloadChange = (e: any) => { //<-- had to double check how to do this, created a similar function in 2nd year, love this kind of onchange!
    const { name, value } = e.target; //<-- custom name and value feilds taken from the target.
    setAddPayload((prevState) => ({ //<-- sets the previous state using a spread operator and adds the new key value pairs.
      ...prevState,
      [name]: value,
    })); //<-- this type of function ensures that the newly edited key value pair is updated while keeping the old ones, all in one callback.
  }; //<-- just requires that the fielsd have both a name and value attribute, alongside the onchange calling this handler.

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
                {/* Example component leading to 3rd party payment option */}
                {/* <a href="https://third-party-payment.com">
                  <div
                    className={[styles.button, styles.addElements].join(" ")}
                  >
                    <img src={sendIcon} />
                    <p>Add Elements</p>
                  </div>
                </a> */}
                <div
                  onClick={() => setModalOpen(true)}
                  className={[styles.button, styles.addElements].join(" ")}
                >
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

      {/* Modal */}
      {modalOpen && (
        <>
          <div onClick={closeModal} className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>Add Elements to your wallet</h3>
              <p>Select which currency you'd like to add</p>
              <select
                name="currency"
                value={addPayload.currency}
                onChange={handlePayloadChange}
                className={styles.selector}
              >
                <option value="h2">H2</option>
                <option value="li">Li</option>
                <option value="pd">Pd</option>
                <option value="xe">Xe</option>
              </select>
              <p>Choose the amount you'd like to add</p>
              <input
                name="amount"
                value={addPayload.amount}
                onChange={handlePayloadChange}
                type="number"
              />

              <button onClick={() => addCurrency(addPayload)}>Add</button> {/*<-- the real deal */}
              {/* <button onClick={() => console.log(addPayload)}>Add</button> //<-- Test button */} 

              <button onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileActionsComponent;
