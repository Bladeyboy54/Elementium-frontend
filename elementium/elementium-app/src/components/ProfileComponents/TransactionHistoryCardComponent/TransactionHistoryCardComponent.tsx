import React from "react";
import styles from "./TransactionHistoryCardComponent-styles.module.scss";

import upload from "../../../assets/icons/upload.svg";
import download from "../../../assets/icons/download.svg";
import placeholder from "../../../assets/logo-notext-black.svg";

const TransactionHistoryCardComponent = (props: any) => {

    const {type, recipient, amount} = props;

    const displayType = type.charAt(0).toUpperCase() + type.slice(1);
    const formattedAmount = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount);

    return(<>
        <div className={styles.main}>
            <div className={styles.type}>

                <img src={  type === "sent" ? upload :
                            type === "received" ? download :
                            type === "withdrew" ? download :
                            placeholder} 
                            className={styles.icon}
                alt="icon" />


                
                {type === "sent" ? <p className={styles.sent}>{displayType}</p> :
                type === "received" ? <p className={styles.received}>{displayType}</p> :
                type === "withdrew" ? <p className={styles.withdrew}>{displayType}</p> :
                <p className={styles.placeholder}>{displayType}</p>}

            </div>
            <div className={styles.recipient}>
                <p>{recipient}</p>
            </div>
            <div className={styles.amount}>
                <p>{formattedAmount}</p>
            </div>
        </div>
    </>);

}


export default TransactionHistoryCardComponent;
