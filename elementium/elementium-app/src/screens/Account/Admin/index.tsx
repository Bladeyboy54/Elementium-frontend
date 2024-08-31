import React, { useEffect, useState } from "react";
import "./index.css";
import AdminUsersTable from "./adminUsersTable/adminUsersTable";
import { getAllUsers } from "../../../services/getAllUsers";

export const Admin = () => {

  const [accountHolder, setAccountHolder] = useState<any[]>([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      console.log(data);
      setAccountHolder(data || []);
    });
  }, []);

return (
  <>
    <div className="adminPage">


      {/* ///////////////////// Page Title Box ///////////////////// */}
      <div className="pageTitleBox">
        <h1>Account Holders</h1>
        <div className="filler-line" />
      </div>

      <div className="adminUsersTable">
        <div className="adminUsersTableBlock">
          <h2>Users</h2>
          <div className="adminUsersTableTitles">
            <p>#</p>
            <p>Name</p>
            <p>User ID</p>
            <p>Login</p>
            <p>Acc Type</p>
            <p>Admin Action</p>
          </div>
          <div className="adminUsersTableScroll">
          {accountHolder.length > 0 ? (
                accountHolder.map((item, index) => (
                  <AdminUsersTable 
                    key={index}  // Use a unique key
                    id={item.$id} 
                    name={item.username} 
                    userID={item.userId} 
                    login={item.created_at} 
                    accType={item.account?.accountStatusId} 
                    adminAction={item.account?.active}
                    account={item.account}
                    fromTransactions={item.account?.fromTransactions}
                    toTransactions={item.account?.toTransactions}
                    status={item.account?.status}
                  />
                ))
              ) : (
                <p>No users found.</p>
              )}            
          </div>
        </div>
      </div>





    </div>
  </>
)
  
};
