import React, { useState } from "react";
import styles from "./TransActionComponent-styles.module.scss"
import payIcon from "../../../assets/icons/upload.svg";
import transferIcon from "../../../assets/icons/Transfer.svg";
import withdrawIcon from "../../../assets/icons/download.svg";
import moreIcon from "../../../assets/icons/more_horiz.svg";
import OverlayPayCard from "../OverlayInputCard/OverlayPayCard/OverlayPayCard";

const TransActionComponent = () => {

    const [isOverlayPayCardVisible, setIsOverlayPayCardVisible] = useState(false);

    const handlePaymentClick = () => {
        setIsOverlayPayCardVisible(true);
    };
    
    const closeInputCard = () => {
        setIsOverlayPayCardVisible(false);
    };

    const submitPayment = () => {
        // add Logic for making payment here

        console.log("Payment has been made ")
    }
    return(
        <>
            <div className={styles.main}>
            <div className={styles.content}>

                {/* actions */}
                <div className={styles.actions}>
                        <div className={[styles.button, styles.sendButton].join(' ')} onClick={handlePaymentClick}>
                            <img src={payIcon} /><p>Send</p>
                        </div>

                        <div className={[styles.button, styles.receiveButton].join(' ')}>
                            <img src={transferIcon} /><p>Transfer</p>
                        </div>

                        <div className={[styles.button, styles.withdrawButton].join(' ')}>
                            <img src={withdrawIcon} /><p>Withdraw</p>
                        </div>

                        <div className={[styles.button, styles.moreOptionsButton].join(' ')}>
                            <img src={moreIcon} />
                        </div>
                </div>
                {/* end of actions */}


            </div>
        </div>
            <OverlayPayCard isVisible={isOverlayPayCardVisible} onClose={closeInputCard} submitPayment={submitPayment}/>
        </>
    )
}

export default TransActionComponent