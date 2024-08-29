import React from "react";
import "./index.css";
import AdminUsersTable from "./adminUsersTable/adminUsersTable";

export const Admin = () => {


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
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="active"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="active"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
              <AdminUsersTable id="1" name="Darlene Robertson" userID="2798" login="27/08/24" accType="Reactive" adminAction="inactive"/>
            </div>
          </div>
        </div>





      </div>    
    </>
  )
  
};
