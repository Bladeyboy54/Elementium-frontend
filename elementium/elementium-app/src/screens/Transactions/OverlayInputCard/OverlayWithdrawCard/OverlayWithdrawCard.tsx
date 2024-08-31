import React, { useState } from "react";
import styles from "./OverlayWithdrawCard-styles.module.scss";

const OverlayWithdrawCard = ({
    isVisible,
    onClose,
    submitWithdraw,
  }: {
    isVisible: boolean;
    onClose: () => void;
    submitWithdraw: () => void;
  }) => {

 

  const [selectedBank, setSelectedBank] = useState("FNB/RMB");
  const [selectedCurrency, setSelectedCurrency] = useState("Hydrogen");
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const banks = [
    "FNB/RMB",
    "ABSA Bank Limited",
    "Capitec Bank",
    "NedBank Limited",
    "Standard Bank",
    "African Bank",
    "Bidvest Bank",
    "Capitec Business",
    "Discovery Bank",
    "Investec Bank",
    "TymeBank",
  ];

  const currencies = ["Hydrogen", "Lithium", "Palladium", "Xenon"];

  const handleBankClick = (bank: string) => {
    setSelectedBank(bank);
    setIsBankDropdownOpen(false);
  };

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  if (!isVisible) return null;
  return (

    <div className={styles.overlay} >
      <div className={styles.inputCard}>
        <h2>Make a Withdrawal</h2>

        <p>Account No.</p>

        <input type="number" placeholder="629253715972" />

        <p>Bank</p>
        {/* <select>
            <option>FNB/RMB</option>
            <option>ABSA Bank Limited</option>
            <option>Capitec Bank</option>
            <option>NedBank Limited</option>
            <option>Standard Bank</option>
            <option>African Bank</option>
            <option>Bidvest Bank</option>
            <option>Capitec Business</option>
            <option>Discovery Bank</option>
            <option>Investec Bank</option>
            <option>TymeBank</option>
        </select> */}
        <div
          className={styles.customSelect}
          onClick={() => setIsBankDropdownOpen(!isBankDropdownOpen)}
        >
          <div className={styles.selectedOption}>{selectedBank}</div>
          {isBankDropdownOpen && (
            <ul className={styles.optionList}>
              {banks.map((bank) => (
                <li
                  key={bank}
                  className={styles.optionItem}
                  onClick={() => handleBankClick(bank)}
                >
                  {bank}
                </li>
              ))}
            </ul>
          )}
        </div>

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
        <input type="number" placeholder="2600.00" />

        <div className={styles.withdrawButtonContainer}>
            <div className={styles.makeWithdrawButton} 
                onClick={submitWithdraw}>
                    <p>Make Withdrawal</p>
            </div>
            <div className={styles.closeButtonWithdrawCard} 
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

export default OverlayWithdrawCard;