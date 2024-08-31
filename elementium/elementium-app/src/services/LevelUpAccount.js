export const levelUpAccount = async (userLoggedIn) => {
     
    let userId = userLoggedIn && typeof userLoggedIn !== "undefined" ? userLoggedIn.account.accountId : 1;
  
    try {
      const response = await fetch(`http://localhost:5138/api/Account/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let data = await response.json(); // <-- this is the json data of the user so we can extreact the balances of the currencies
      data = data.$values[0];
  

    //   STILL WORKING HERE: DONT TOUCH.....

      const putResponse = await fetch(`http://localhost:5138/api/Account/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balance_h2: data.balance_h2 + 100,
        }),
      });
      
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  