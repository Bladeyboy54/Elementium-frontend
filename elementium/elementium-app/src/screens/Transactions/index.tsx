import React from "react";
import "./index.css";

export const Transactions = () => {


  return(


    
    <div className="transactionsPage">

      {/* ////////////////////////Page Title Box////////////////////////////////////// */}
      <div className="pageTitleBox">
        {/* TODO: rename *Username* to call username */}
        <div className="pageTitle">Welcome *Username*</div> 
        <div className="pageTitleLine">
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="2" viewBox="0 0 1200 2" fill="none">
            <path d="M0.5 1H1200" stroke="#B1B98E" stroke-opacity="0.25"/>
          </svg>
        </div>
      </div>

      <div className="mainBody">
        <div className="userOverview">
            
        </div>    
      </div>
    </div>
    
    
  );
};
