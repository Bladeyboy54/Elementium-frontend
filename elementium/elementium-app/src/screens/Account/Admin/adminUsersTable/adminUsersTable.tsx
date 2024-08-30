import React from "react";
import styles from "./adminUsersTable-styles.module.scss";


const AdminUsersTable = (props: any) => {

    const { id, name, userID, login, accType, adminAction } = props;

    const getActionButtonText = () => {
        return adminAction === true ? "Disable" : "Activate";
    }
    const getButtonClass = () => {
        return adminAction === true ? styles.adminTbButtonActive : styles.adminTbButtonInactive;
    };

    // const getButtonStyle = () => {
    //     return adminAction === "active" ? { color: "green" } : { color: "red" };
    // };
    return (

        <>
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
                    <div className={`${styles.adminTbButton} ${getButtonClass()}`}
                    //  style={getButtonStyle()}
                     >
                        <p>{getActionButtonText()}</p>
                    </div>
                </div>
            </div>
        </>

    )

}

export default AdminUsersTable;