import React, { useEffect, useState } from "react";
import styles from "./OverlayPayCard-styles.module.scss";
import { getAllUsers } from "../../../../services/getAllUsers";
import { transactionFunction } from "../../../../services/TransactionFunction";
import { useAuth } from "../../../../utility/global/auth/authProvider";
import { fetchUserData } from "../../../../services/GetUser";

const OverlayPayCard = ({
  isVisible,
  onClose,
  submitPayment,
}: {
  isVisible: boolean;
  onClose: () => void;
  submitPayment: (userId: number, recipient: number, amount: number, currency: string) => void;
}) => {

  // const [userId, setUserId] = 
  const [user, setUser] = useState<any>({ username: "Felix", email: "King" });
  const [loading, setLoading] = useState(true);
  const { userLoggedIn } = useAuth()

  useEffect(() => {
    fetchUserData(userLoggedIn).then((data) => {
      setUser(data[0]);
      
      setTimeout(() => setLoading(false), 500);
    });
  }, [fetchUserData]);

  // console.log("this is the current user", user.userId)

  const [selectedCurrency, setSelectedCurrency] = useState("balance_h2");
  // const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    console.log("Selected currency:", selectedCurrency)
    // setIsCurrencyDropdownOpen(false);
  }, [selectedCurrency]);

  //-----------Recipients-------------------------------------------------------\\
  const [selectedRecipient, setSelectedRecipient] = useState<number>(3)
  const [recipients, setRecipients] = useState<any[]>([])

  useEffect(() => {
    console.log("Selected Recipient:", selectedRecipient)
    // setIsCurrencyDropdownOpen(false);
  }, [selectedRecipient]);

  

  useEffect(() => {
    getAllUsers().then((data) => {
      console.log("==>this thingy", data[0].account?.accountId)
      setRecipients(data)
    })
  }, [])


  const [amount, setAmount] = useState<number>(0)
  if (!isVisible) return null;

  return (

    <div className={styles.overlay} >
      <div className={styles.inputCard}>
        <h2>Make a Payment</h2>

        <p>Recipient</p>
        <select onChange={(e) => setSelectedRecipient(parseInt(e.target.value) || 0)}>
          {recipients.map((recipient, index) => (
            <option
              key={index}
              value={recipient.account?.accountId}
            >
              {recipient.username}
            </option>
          ))}
        </select>

        {/* <input type="text" placeholder="Bessie Cooper" /> */}

        <p>Currency</p>
        <select onChange={e => setSelectedCurrency(e.target.value)}>
          <option key="balance_h2" value="balance_h2">Hydrogen</option>
          <option key="balance_li" value="balance_li">Lithium</option>
          <option key="balance_pd" value="balance_pd">Palladium</option>
          <option key="balance_xe" value="balance_xe">Xenon</option>
        </select>



        <p>Amount</p>
        <input type="text" value={amount} onChange={(e) => setAmount(parseInt(e.target.value) || 0)} placeholder="2600.00" />


        <div className={styles.paymentButtonContainer}>
          <div className={styles.makePaymentButton}
            onClick={() =>
              submitPayment(user.account.accountId, selectedRecipient, amount, selectedCurrency)
            }
            >
          <p>Make Payment</p>
        </div>
        <div className={styles.closeButtonPayCard}
          onClick={onClose}>
          <p>close</p>
        </div>
      </div>
    </div>
    </div >

  );
};

export default OverlayPayCard;