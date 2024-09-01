import React, { useEffect, useState } from "react";
import styles from "./adminUsersTable-styles.module.scss";
import OverlayHolderCard from "./OverlayHolderCard/OnverlayHolderCard";
import { useAuth } from "../../../../utility/global/auth/authProvider";
import { BeatLoader } from "react-spinners";

const AdminUsersTable = (props: any) => {
  const {
    id,
    name,
    userId,
    login,
    accType,
    adminAction,
    account,
    fromTransactions,
    toTransactions,
    status,
    user,
    sendFeedbackMessage,
  } = props;
  const { freezeAccount } = useAuth();
  const [isOverlayHolderdVisible, setIsOverlayHolderVisible] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(user.account.active);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleHolderCardOpen = () => {
    setIsOverlayHolderVisible(true);
  };

  const handleHolderCardClose = () => {
    setIsOverlayHolderVisible(false);
  };

  const getActionButtonText = () => {
    return isActive === true ? "Deactivate" : "Activate";
  };
  const getButtonClass = () => {
    return adminAction === true
      ? styles.adminTbButtonActive
      : styles.adminTbButtonInactive;
  };

  const toggleFreeze = async () => {
    setIsLoading(true);

    // Toggle user active status based on current status
    let userAccount = user.account;
    console.log(userAccount);

    if (userAccount?.active) {
      userAccount.active = false;
    } else {
      userAccount.active = true;
    }

    // API call
    const deactivatedAccount = await freezeAccount(userAccount);

    console.log("Deactivated acc: ", deactivatedAccount);
    if (deactivatedAccount?.type === 200) {
      setIsActive(!isActive);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    sendFeedbackMessage(feedbackMessage);
  }, [feedbackMessage, isActive]);

  return (
    <>
      <div>
        <div className={styles.adminMain}>
          <div className={styles.adminTbId}>
            <p>{id}</p>
          </div>

          <div className={styles.adminTbName}>
            <p>{name}</p>
          </div>

          <div className={styles.adminTbUserId}>
            <p>{userId}</p>
          </div>

          <div className={styles.adminTbLogin}>
            <p>{login}</p>
          </div>

          <div className={styles.adminTbAccType}>
            <p>{accType}</p>
          </div>
          {account != null ? (
            <div
              className={[styles.button, styles.sendButton].join(" ")}
              onClick={handleHolderCardOpen}
            >
              <div className={`${styles.adminTbButton} ${getButtonClass()}`}>
                <p>View</p>
              </div>
            </div>
          ) : (
            <div className={[styles.button, styles.sendButton].join(" ")}>
              <div className={`${styles.adminTbButton} ${getButtonClass()}`}>
                <p>View</p>
              </div>
            </div>
          )}

          <div className={styles.adminTbAdminAction}>
            <div
              className={`${styles.adminTbButton} ${getButtonClass()}`}
              onClick={toggleFreeze}
            >
              {!isLoading ? (
                <p>{getActionButtonText()}</p>
              ) : (
                <BeatLoader color="#45404D" loading={isLoading} size={8} />
              )}
            </div>
          </div>
        </div>
      </div>
      <OverlayHolderCard
        isVisible={isOverlayHolderdVisible}
        onClose={handleHolderCardClose}
        id={id}
        name={name}
        userID={userId}
        login={login}
        accType={accType}
        acc={account}
        fromT={fromTransactions}
        toT={toTransactions}
        status={status}
      />
    </>
  );
};

export default AdminUsersTable;
