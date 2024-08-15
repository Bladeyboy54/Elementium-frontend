import React from "react";
import styles from "./TransHistoryCardComponent-styles.module.scss";
import payIcon from "../../../assets/icons/upload.svg";
import transferIcon from "../../../assets/icons/Transfer.svg";
import withdrawIcon from "../../../assets/icons/download.svg";
import placeholder from "../../../assets/logo-notext-black.svg";

// type TransHistoryCardComponentProps = {
//     type: string;
//     recipient: string;
//     amount: string | number;
//   };

// const TransHistoryCardComponent: React.FC<TransHistoryCardComponentProps> = ({ type, recipient, amount }) => {
//     return (
//         <>
//             <div className={styles.card}>
//                 <div className={styles.item}>{type}</div>
//                 <div className={styles.item}>{recipient}</div>
//                 <div className={styles.item}>{amount} ZAR</div>
//             </div>
//         </>
//     )
// }

const TransHistoryCardComponent = (props: any) => {

    const {type, recipient, amount} = props;

    const displayType = type.charAt(0).toUpperCase() + type.slice(1);
    const formattedAmount = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount);

    return(<>
        <div className={styles.main}>
            <div className={styles.type}>

                <img src={  type === "sent" ? payIcon :
                            type === "received" ? transferIcon :
                            type === "withdrew" ? withdrawIcon :
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

export default TransHistoryCardComponent