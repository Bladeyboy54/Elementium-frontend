import React from "react";
import styles from "./TransActionComponent-styles.module.scss"
import payIcon from "../../../assets/icons/upload.svg";
import transferIcon from "../../../assets/icons/Transfer.svg";
import withdrawIcon from "../../../assets/icons/download.svg";
import moreIcon from "../../../assets/icons/more_horiz.svg"

const TransActionComponent = () => {
    return(
        <>
            <div className={styles.main}>
            <div className={styles.content}>

                {/* actions */}
                <div className={styles.actions}>
                        <div className={[styles.button, styles.sendButton].join(' ')}>
                            <img src={payIcon} /><p>Send</p>
                        </div>

                        <div className={[styles.button, styles.receiveButton].join(' ')}>
                            <img src={transferIcon} /><p>Receive</p>
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
        </>
    )
}

export default TransActionComponent