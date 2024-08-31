export const topUpWalletFunction = async (userLoggedIn, topUp) => {
    let accountId =
      userLoggedIn && typeof userLoggedIn !== "undefined"
        ? userLoggedIn.account.accountId
        : 1;
  
    try {
      const response = await fetch(`http://localhost:5138/api/Account/${accountId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let data = await response.json(); // <-- Get the user data, which contains balances
      data = data[0];
  
      console.log("TopUp data = Account: ", data, " TopUp: ", topUp);
  
      let updatedData = { ...data };
  
      switch (topUp.currency) {
        case "balance_h2":
          updatedData.balance_h2 = parseInt(data.balance_h2) + parseInt(topUp.amount);
          break;
        case "balance_li":
          updatedData.balance_li = parseInt(data.balance_li) + parseInt(topUp.amount);
          break;
        case "balance_pd":
          updatedData.balance_pd = parseInt(data.balance_pd) + parseInt(topUp.amount);
          break;
        case "balance_xe":
          updatedData.balance_xe = parseInt(data.balance_xe) + parseInt(topUp.amount);
          break;
        default:
            console.log("TopUp currency: ", topUp.currency);
            
          throw new Error("Unknown currency type");
      }
  
      const putResponse = await fetch(`http://localhost:5138/api/Account/${accountId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!putResponse.ok) {
        throw new Error(`HTTP error! status: ${putResponse.status}`);
      } else {
        console.log("Balance added successfully");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  