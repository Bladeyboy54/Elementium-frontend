import React, { useState } from "react";
import styles from "./OverlayHolderCard-styles.module.scss";

const OverlayHolderCard = ({
    isVisible,
    onClose,
    id,
    name,
    userID,
    login,
    accType
}: {
    isVisible: boolean;
    onClose: () => void;
    id: string;
    name: string;
    userID: string;
    login: string;
    accType: string;
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
                <p>Account Holder: {name}</p>
                <p>User ID: {userID}</p>
                <p>Login: {login}</p>
                <p>Account Type: {accType}</p>

                <div className={styles.paymentButtonContainer}>
                    <div className={styles.closeButtonPayCard}
                        // onClick={onClose}>
                        onClick={onClose}>
                        <p>close</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OverlayHolderCard;