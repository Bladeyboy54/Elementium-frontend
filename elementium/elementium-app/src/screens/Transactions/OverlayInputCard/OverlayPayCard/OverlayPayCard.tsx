import React from "react";
import styles from "./OverlayPayCard-styles.module.scss";

const OverlayPayCard = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  if (!isVisible) return null;

  return (

    <div className={styles.overlay} >
      <div className={styles.inputCard}>
        <h2>Pay</h2>

        <p>Recipient</p>

        <input type="text" placeholder="Bessie Cooper" />

        <p>Currency</p>
        <select>
          <option>Hydrogen</option>
          <option>Lithium</option>
          <option>Palladium</option>
          <option>Xenon</option>
        </select>

        <p>Amount</p>
        <input type="text" placeholder="2600.00" />


        
        <button onClick={onClose}>Complete Transaction</button>
      </div>
    </div>

    // <div className={styles.overlay}>
    //   <div className={styles.inputCard}>
    //     <p>Input your details here</p>
    //     <input type="text" placeholder="Enter something..." />
    //     <button onClick={onClose}>Close</button>
    //   </div>
    // </div>
  );
};

export default OverlayPayCard;
