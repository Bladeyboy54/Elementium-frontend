import React, { useEffect, useState } from "react";
import styles from "./OverlayHolderCard-styles.module.scss";
import { NULL } from "sass";
import { fetchAccountData } from "../../../../../services/GetAccount";

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
    toT
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
                <p>Account Type: {accType}</p>

                <h2>Send</h2>
                {
                    acc != null ? (
                        fromT != null ? (
                            fromT.map((item: any) => (
                                <div>
                                    <p> <span><b> Ammount Transfered: </b></span>{item.amount}</p>
                                    <p>Recepient{item.toAccountId}</p>
                                    <p>Date: {item.timestamp}</p>
                                    <p>Type: {item.transactionType}</p>
                                </div>

                            ))
                        ) : (
                            <p>No Transactions Received</p>
                        )
                    ) : (
                        <p>No account Available</p>
                    )
                }

                <h2>Receive</h2>
                {
                    acc != null ? (
                        toT != null ? (
                            toT.map((item: any) => (
                                <div>
                                    <p> <span><b> Ammount Transfered: </b></span>{item.amount}</p>
                                    <p>Recepient{item.fromAccountId}</p>
                                    <p>Date: {item.timestamp}</p>
                                    <p>Type: {item.transactionType}</p>
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