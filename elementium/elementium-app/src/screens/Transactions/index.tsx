import React, { useEffect, useState } from "react";
import "./index.css";
import logoNoText from "../../assets/logo-notext-black.svg";
import TransActionComponent from "./TransActionComponent/TransActionComponent";
import TransHistoryCardComponent from "./TransHistoryCardComponent/TransHistoryCardComponent";
import { fetchUserData } from "../../services/GetUser";
import { useAuth } from "../../utility/global/auth/authProvider";

export const Transactions = () => {

  const [user, setUser] = useState<any>({ username: "Felix", email: "King" });
  const [loading, setLoading] = useState(true);

  const { userLoggedIn } = useAuth()

  const transactions = [ 
    //-----------------DUMMY DATA-----------------\\
    { type: "sent", recipient: "1234", amount: "14058" },
    { type: "transfer", recipient: "5678", amount: "3250" },
    { type: "withdrew", recipient: "1234", amount: "14058" },
    { type: "transfer", recipient: "5678", amount: "3250" },
    { type: "sent", recipient: "1234", amount: "14058" },
    { type: "transfer", recipient: "5678", amount: "10000" },
  ]

  useEffect(() => {
    fetchUserData(userLoggedIn).then((data) => {
      setUser(data.$values[0]);
      setTimeout(() => setLoading(false), 1000);
      
    });
  }, [fetchUserData]);

  // console.log("USER ID ===>", user)
  return(

    <>
      <div className="transactionsPage">

        {/* -----------------Page Title Box----------------- */}
                
        <div className="pageTitleBox">
          
          <h1>Transactions</h1> 
          <div className="filler-line"></div>
        </div>

        <div className="transactionMainBody">


          {/* -----------------Plaque Section----------------- */}
          <div className="transactionUserOverviewPlaque">
            <div className="transactionPlaqueAddon"></div>
            {/* <div className="transactionPlaqueInfo">
              <p><span className="transactionUsernameText">Felix</span> King</p>
              <h3>5355 **** **** 2546</h3>
              <span className="transactionAccountDate">08/26</span>
            </div>
                 */}
            {loading ? null: (
              <div className="transactionPlaqueInfo">
                {user.username != null ? (
                  <>
                    <p>
                      <span className="transactionUsernameText">
                        {user.username}
                      </span>{" "}
                    </p>
                    <h3>
                      {user.cardNumbers
                        ? `${user.cardNumbers.slice(
                            0,
                            4
                          )} **** **** ${user.cardNumbers.slice(-4)}`
                        : "No card available"}
                    </h3>
                    <span className="transactionAccountDate">08/26</span>
                  </>
                ) : (
                  <>
                    <p>
                      <span className="transactionUsernameText">Felix</span> King
                    </p>

                    <h3>5355 **** **** 2546</h3>
                    <span className="transactionAccountDate">08/26</span>
                  </>
                )}
              </div>
            )}

            <img className="logoNoText-transaction" src={logoNoText} alt="atom" />
          </div>

          
          {/* -----------------End Plaque Section----------------- */}

          {/* -----------------Transactions Actions----------------- */}

          <TransActionComponent/>

 {/* #region Transcaction History */}

          {/* -----------------Transaction History----------------- */}

          <div className="transactionHistory">
            <div className="transactionHistoryBlock">
              <h2>Transaction History</h2>
              <div className="transactionColumnTitles">
                <p>Type</p>
                <p>Recipient</p>
                <p>Amount</p>
              </div>
              <div className="transactionScrollHistory">
                {transactions.map((transaction, index) => (
                  <TransHistoryCardComponent
                    key={index}
                    type={transaction.type}
                    recipient={transaction.recipient}
                    amount={transaction.amount}
                  />
                ))}
                
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
    
    
    //#endregion
    
  );
};
