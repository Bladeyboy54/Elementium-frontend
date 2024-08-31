import React, { useState } from "react";
import styles from "./OverlayTransferCard-styles.module.scss";

const OverlayTransferCard =({
    isVisible,
    onClose,
    submitTransfer,
} : {
    isVisible: boolean;
    onClose: () => void;
    submitTransfer: () => void;
}) => {
    const [selectedCurrency1, setSelectedCurrency1] = useState("Hydrogen");
    const [isCurrencyDropdownOpen1, setIsCurrencyDropdownOpen1] = useState(false);

    const currencies = ["Hydrogen", "Lithium", "Paladium", "Xenon"];

    const handleCurrencyClick1 = (currency: string) => {
        setSelectedCurrency1(currency);
        setIsCurrencyDropdownOpen1(false);
    };

    const [selectedCurrency2, setSelectedCurrency2] = useState("Hydrogen");
    const [isCurrencyDropdownOpen2, setIsCurrencyDropdownOpen2] = useState(false);

    const handleCurrencyClick2 = (currency: string) => {
        setSelectedCurrency2(currency);
        setIsCurrencyDropdownOpen2(false);
    };
    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.inputCard}>
                <h2>Fuse your Elements</h2>


                <p>From</p>

                <div
                className={styles.customSelect}
                onClick={() => setIsCurrencyDropdownOpen1(!isCurrencyDropdownOpen1)}
                >
                <div className={styles.selectedOption}>{selectedCurrency1}</div>
                {isCurrencyDropdownOpen1 && (
                    <ul className={styles.optionList}>
                    {currencies.map((currency) => (
                        <li
                        key={currency}
                        className={styles.optionItem}
                        onClick={() => handleCurrencyClick1(currency)}
                        >
                        {currency}
                        </li>
                    ))}
                    </ul>
                )}
                </div>


                <p>To</p>

                <div
                className={styles.customSelect}
                onClick={() => setIsCurrencyDropdownOpen2(!isCurrencyDropdownOpen2)}
                >
                <div className={styles.selectedOption}>{selectedCurrency2}</div>
                {isCurrencyDropdownOpen2 && (
                    <ul className={styles.optionList}>
                    {currencies.map((currency) => (
                        <li
                        key={currency}
                        className={styles.optionItem}
                        onClick={() => handleCurrencyClick2(currency)}
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
                        onClick={submitTransfer}>
                            <p>Confirm Fusion</p>
                    </div>
                    <div className={styles.closeButtonPayCard} 
                        onClick={onClose}>
                            <p>close</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OverlayTransferCard;