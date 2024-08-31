import React, { useEffect, useState } from "react";
import styles from "./OverlayHolderCard-styles.module.scss";
import { NULL } from "sass";
import { fetchAccountData } from "../../../../../services/GetAccount";
import TransactionHistoryCardComponent from "../../../../../components/ProfileComponents/TransactionHistoryCardComponent/TransactionHistoryCardComponent";

const OverlayHolderCard = ({
    isVisible,
    onClose,
    id,
    name,
    userID,
    login,
    accType,
    acc,
    fromT,
    toT,
    status
}: {
    isVisible: boolean;
    onClose: () => void;
    id: string;
    name: string;
    userID: string;
    login: string;
    accType: string;
    acc: any;
    fromT: [];
    toT: [];
    status:any
}) => {
    console.log(fromT)

    if (!isVisible) return null;

    return (

        <div className={styles.overlay} >
            <div className={styles.inputCard}>

                <h2>Make a Payment</h2>
                <p>Account Holder: {name}</p>
                <p>User ID: {userID}</p>
                <p>Login: {login}</p>
                <p>Account Type: {status.status_name}</p>

                {
                    acc != null ? (
                        fromT != null ? (
                            fromT.map((item: any) => (
                                <div className={styles.scrollHistory}>
                                    <TransactionHistoryCardComponent 
                                        type="sent"
                                        recipient={item.toAccountId}
                                        amount={item.amount}
                                    />
                                </div>

                            ))
                        ) : (
                            <p>No Transactions Received</p>
                        )
                    ) : (
                        <p>No account Available</p>
                    )
                }

                {
                    acc != null ? (
                        toT != null ? (
                            toT.map((item: any) => (
                                <div>
                                    <TransactionHistoryCardComponent 
                                        type="received"
                                        recipient={item.toAccountId}
                                        amount={item.amount}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No Transactions Received</p>
                        )
                    ) : (
                        <p>No account Available</p>
                    )
                }

                <div className={styles.paymentButtonContainer}>
                    <div className={styles.closeButtonPayCard}
                        onClick={onClose}>
                        <p>close</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OverlayHolderCard;