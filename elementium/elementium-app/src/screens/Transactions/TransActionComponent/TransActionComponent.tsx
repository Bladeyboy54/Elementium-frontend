import React, { useState } from "react";
import styles from "./TransActionComponent-styles.module.scss"
import payIcon from "../../../assets/icons/upload.svg";
import transferIcon from "../../../assets/icons/Transfer.svg";
import withdrawIcon from "../../../assets/icons/download.svg";
import moreIcon from "../../../assets/icons/more_horiz.svg";
import OverlayPayCard from "../OverlayInputCard/OverlayPayCard/OverlayPayCard";
import OverlayWithdrawCard from "../OverlayInputCard/OverlayWithdrawCard/OverlayWithdrawCard";

const TransActionComponent = () => {

    const [isOverlayPayCardVisible, setIsOverlayPayCardVisible] = useState(false);
    const [isOverlayWithdrawCardVisible, setIsOverlayWithdrawCardVisible] = useState(false);

    const handlePaymentCardOpen = () => {
        setIsOverlayPayCardVisible(true);
    };
    
    const handlePaymentCardClose = () => {
        setIsOverlayPayCardVisible(false);
    };

    const handleSubmitPayment = () => {
        // add Logic for making payment here

        console.log("Payment has been made ")
    }

    const handleWithdrawCardOpen = () =>{
        setIsOverlayWithdrawCardVisible(true)
    };

    const handleWithdrawCardClose = () => {
        setIsOverlayWithdrawCardVisible(false);
    };

    const handleSubmitWithdraw = () => {
        // add Logic for making payment here

        console.log("Withdrawal has been made ")
    }

    return(
        <>
            <div className={styles.main}>
            <div className={styles.content}>

                {/* actions */}
                <div className={styles.actions}>
                        <div className={[styles.button, styles.sendButton].join(' ')} onClick={handlePaymentCardOpen}>
                            <img src={payIcon} /><p>Send</p>
                        </div>

                        <div className={[styles.button, styles.receiveButton].join(' ')} >
                            <img src={transferIcon} /><p>Transfer</p>
                        </div>

                        <div className={[styles.button, styles.withdrawButton].join(' ')} onClick={handleWithdrawCardOpen}>
                            <img src={withdrawIcon} /><p>Withdraw</p>
                        </div>

                        <div className={[styles.button, styles.moreOptionsButton].join(' ')}>
                            <img src={moreIcon} />
                        </div>
                </div>
                {/* end of actions */}


            </div>
        </div>
            <OverlayPayCard isVisible={isOverlayPayCardVisible} onClose={handlePaymentCardClose} submitPayment={handleSubmitPayment}/>
            <OverlayWithdrawCard isVisible={isOverlayWithdrawCardVisible} onClose={handleWithdrawCardClose} submitWithdraw={handleSubmitWithdraw}/>
        </>
    )
}

export default TransActionComponent