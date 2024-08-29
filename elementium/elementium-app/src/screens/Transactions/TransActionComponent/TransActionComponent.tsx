import React, { useState } from "react";
import styles from "./TransActionComponent-styles.module.scss"
import payIcon from "../../../assets/icons/upload.svg";
import transferIcon from "../../../assets/icons/Transfer.svg";
import withdrawIcon from "../../../assets/icons/download.svg";
import moreIcon from "../../../assets/icons/more_horiz.svg";
import OverlayInputCard from "../OverlayInputCard/OverlayInputCard";

const TransActionComponent = () => {

    const [isOverlayInputCardVisible, setIsOverlayInputCardVisible] = useState(false);

    const handleButtonClick = () => {
        setIsOverlayInputCardVisible(true);
      };
    
      const closeInputCard = () => {
        setIsOverlayInputCardVisible(false);
      };


    return(
        <>
            <div className={styles.main}>
            <div className={styles.content}>

                {/* actions */}
                <div className={styles.actions}>
                        <div className={[styles.button, styles.sendButton].join(' ')} onClick={handleButtonClick}>
                            <img src={payIcon} /><p>Send</p>
                        </div>

                        <div className={[styles.button, styles.receiveButton].join(' ')} onClick={handleButtonClick}>
                            <img src={transferIcon} /><p>Receive</p>
                        </div>

                        <div className={[styles.button, styles.withdrawButton].join(' ')} onClick={handleButtonClick}>
                            <img src={withdrawIcon} /><p>Withdraw</p>
                        </div>

                        <div className={[styles.button, styles.moreOptionsButton].join(' ')} onClick={handleButtonClick}>
                            <img src={moreIcon} />
                        </div>
                </div>
                {/* end of actions */}


            </div>
        </div>
            <OverlayInputCard isVisible={isOverlayInputCardVisible} onClose={closeInputCard} />
        </>
    )
}

export default TransActionComponent