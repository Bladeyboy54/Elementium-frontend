import React, { useState } from "react";
import styles from "./OverlayPayCard-styles.module.scss";

const OverlayPayCard = ({
  isVisible,
  onClose,
  submitPayment,
}: {
  isVisible: boolean;
  onClose: () => void;
  submitPayment: () => void;
}) => {

    const [selectedCurrency, setSelectedCurrency] = useState("Hydrogen");
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

    const currencies = ["Hydrogen", "Lithium", "Palladium", "Xenon"];

    const handleCurrencyClick = (currency: string) => {
        setSelectedCurrency(currency);
        setIsCurrencyDropdownOpen(false);
      };

  if (!isVisible) return null;

  return (

    <div className={styles.overlay} >
      <div className={styles.inputCard}>
        <h2>Make a Payment</h2>

        <p>Recipient</p>

        <input type="text" placeholder="Bessie Cooper" />

        <p>Currency</p>
        {/* <select>
          <option>Hydrogen</option>
          <option>Lithium</option>
          <option>Palladium</option>
          <option>Xenon</option>
        </select> */}

        <div
          className={styles.customSelect}
          onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
        >
          <div className={styles.selectedOption}>{selectedCurrency}</div>
          {isCurrencyDropdownOpen && (
            <ul className={styles.optionList}>
              {currencies.map((currency) => (
                <li
                  key={currency}
                  className={styles.optionItem}
                  onClick={() => handleCurrencyClick(currency)}
                >
                  {currency}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p>Amount</p>
        <input type="text" placeholder="2600.00" />


        <div className={styles.paymentButtonContainer}>
            <div className={styles.makePaymentButton} 
                onClick={submitPayment}>
                    <p>Make Payment</p>
            </div>
            <div className={styles.closeButtonPayCard} 
                onClick={onClose}>
                    <p>close</p>
            </div>
        </div>
      </div>
    </div>

    // <div className={styles.overlay}>
    //   <div className={styles.inputCard}>
    //     <p>Input your details here</p>
    //     <input type="text" placeholder="Enter something..." />
    //     <button onClick={onClose}>Close</button>
    //   </div>
    // </div>
  );
};

export default OverlayPayCard;