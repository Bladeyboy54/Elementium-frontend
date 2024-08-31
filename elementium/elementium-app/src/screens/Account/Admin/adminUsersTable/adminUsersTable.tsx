import React, { useState } from "react";
import styles from "./adminUsersTable-styles.module.scss";
import OverlayHolderCard from "./OverlayHolderCard/OnverlayHolderCard";


const AdminUsersTable = (props: any) => {

    const { id, name, userID, login, accType, adminAction, account, fromTransactions, toTransactions, status } = props;

    const [isOverlayHolderdVisible, setIsOverlayHolderVisible] = useState(false);

    const handleHolderCardOpen = () => {
        setIsOverlayHolderVisible(true)
    };

    const handleHolderCardClose = () => {
        setIsOverlayHolderVisible(false);
    };

    const getActionButtonText = () => {
        return adminAction === true ? "Disable" : "Activate";
    }
    const getButtonClass = () => {
        return adminAction === true ? styles.adminTbButtonActive : styles.adminTbButtonInactive;
    };

    return (

        <>
            <div className={[styles.button, styles.sendButton].join(' ')} onClick={handleHolderCardOpen}>
                <div className={styles.adminMain}>

                    <div className={styles.adminTbId}>
                        <p>{id}</p>
                    </div>

                    <div className={styles.adminTbName}>
                        <p>{name}</p>
                    </div>

                    <div className={styles.adminTbUserId}>
                        <p>{userID}</p>
                    </div>

                    <div className={styles.adminTbLogin}>
                        <p>{login}</p>
                    </div>

                    <div className={styles.adminTbAccType}>
                        <p>{accType}</p>
                    </div>

                    <div className={styles.adminTbAdminAction}>
                        <div className={`${styles.adminTbButton} ${getButtonClass()}`}>
                            <p>{getActionButtonText()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <OverlayHolderCard
                isVisible={isOverlayHolderdVisible}
                onClose={handleHolderCardClose}
                id={id}
                name={name}
                userID={userID}
                login={login}
                accType={accType}
                acc={account}
                fromT={fromTransactions}
                toT={toTransactions}
                status={status} />
        </>

    )

}

export default AdminUsersTable;