import React, { useEffect, useState } from "react";
import "./index.css";
import AdminUsersTable from "./adminUsersTable/adminUsersTable";
import { getAllUsers } from "../../../services/getAllUsers";
import { BarLoader } from "react-spinners";

export const Admin = () => {
  const [accountHolder, setAccountHolder] = useState<any[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>();

  const getFeedbackMessage = (message: string | null) => {
    setFeedbackMessage(message);
  };

  useEffect(() => {
    getAllUsers().then((data) => {
      console.log(data);
      setAccountHolder(data || []);
    });
  }, []);

  useEffect(() => {}, [feedbackMessage]);

  return (
    <>
      <div className="adminPage">
        <div className="pageTitleBox">
          <h1>Admin Portal</h1>
          <div className="filler-line" />
        </div>

        {accountHolder.length > 0 ? (
          <div className="adminUsersTable">
            <div className="adminUsersTableBlock">
              <h2>Users</h2>
              {feedbackMessage && <div className="">{feedbackMessage}</div>}
              <div className="adminUsersTableTitles">
                <p>#</p>
                <p>Name</p>
                <p>User ID</p>
                <p>Login</p>
                <p>Acc Type</p>
                <p>Admin Action</p>
              </div>
              <div className="adminUsersTableScroll">
                {accountHolder.map((item, index) => {
                  console.log(item);
                  return (
                    <AdminUsersTable
                      key={index} // Use a unique key
                      id={item.$id}
                      name={item.username}
                      userId={item.userId}
                      login={item.created_at}
                      accType={item.account?.accountStatusId}
                      adminAction={item.account?.active}
                      account={item.account}
                      fromTransactions={item.account?.fromTransactions}
                      toTransactions={item.account?.toTransactions}
                      status={item.account?.status}
                      user={item}
                      sendFeedbackMessage={getFeedbackMessage}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="admin-users-table-loader">
            <BarLoader color="#B1B98E" height={10} />
            <div>Fetching data</div>
          </div>
        )}
      </div>
    </>
  );
};
