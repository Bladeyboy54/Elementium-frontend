import React from "react";
import styles from "./OverlayInputCard-styles.module.scss";

const OverlayInputCard = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.inputCard}>
        <p>Input your details here</p>
        <input type="text" placeholder="Enter something..." />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OverlayInputCard;
