import React from "react";
import styles from "./TransHistoryCardComponent-styles.module.scss";

type TransHistoryCardComponentProps = {
    type: string;
    recipient: string;
    amount: string | number;
  };

const TransHistoryCardComponent: React.FC<TransHistoryCardComponentProps> = ({ type, recipient, amount }) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.item}>{type}</div>
                <div className={styles.item}>{recipient}</div>
                <div className={styles.item}>{amount} ZAR</div>
            </div>
        </>
    )
}

export default TransHistoryCardComponent