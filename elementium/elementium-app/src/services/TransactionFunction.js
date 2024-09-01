export const transactionFunction = async (fromUserAccount, toUserAccount, amount, currency) => {

    // expected input: {"accountId": 1,"balance_h2": 6500,"balance_li": 0,"balance_pd": 0,"balance_xe": 22,"active": true,"userId": 3,"accountStatusId": 1...}, {"accountId": 1,"balance_h2": 6500,"balance_li": 0,"balance_pd": 0,"balance_xe": 22,"active": true,"userId": 2,"accountStatusId": 1...}, 500, "balance_h2"

    console.log("This is the From Account",fromUserAccount)
    console.log("This is the To Account",toUserAccount)
    let fromUserAccountId = fromUserAccount;
    let toUserAccountId = toUserAccount;

    try {
        const fromUserResponse = await fetch(`http://localhost:5138/api/Account/${fromUserAccountId}`);
        if (!fromUserResponse.ok) {
            throw new Error(`HTTP error! status: ${fromUserResponse.status}`);
        }
        

        let fromUserData = await fromUserResponse.json();
        fromUserData = fromUserData[0];
        console.log("Fron User Data ==>", fromUserData)
        console.log("currency ==>", currency)
        if (fromUserData[currency] >= amount) {

            const toUserResponse = await fetch(`http://localhost:5138/api/Account/${toUserAccountId}`);
            if (!toUserResponse.ok) {
                throw new Error(`HTTP error! status: ${toUserResponse.status}`);
            }

            let toUserData = await toUserResponse.json();
            toUserData = toUserData[0];

            let updatedFromUserData = { ...fromUserData };

            updatedFromUserData[currency] = parseInt(fromUserData[currency]) - parseInt(amount);

            const putFromUserResponse = await fetch(`http://localhost:5138/api/Account/${fromUserAccountId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFromUserData),
            });


            if (!putFromUserResponse.ok) {
                throw new Error(`HTTP error! status: ${putFromUserResponse.status}`);
            } else {
                console.log("Balance deducted successfully");
            }

            let updatedToUserData = { ...toUserData };

            updatedToUserData[currency] = parseInt(toUserData[currency]) + parseInt(amount);

            const putToUserResponse = await fetch(`http://localhost:5138/api/Account/${toUserAccountId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedToUserData),
            });

            if (!putToUserResponse.ok) {
                throw new Error(`HTTP error! status: ${putToUserResponse.status}`);
            }
            else {
                console.log("Balance added successfully");
            }
            const transactionData = {
                transactionId: 0, 
                transactionType:currency,
                amount: parseInt(amount),
                timestamp: new Date().toISOString(),
                fromAccountId: fromUserAccountId,
                toAccountId: toUserAccountId
             };
             
             const postTransactionResponse = await fetch(`http://localhost:5138/api/Transaction`, 
             {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify(transactionData),
             });
             
             if (!postTransactionResponse.ok) {
                 throw new Error(`HTTP error! status: ${postTransactionResponse.status}`);
             } else {
                 console.log("Transaction recorded successfully");
             }
        } else {
            throw new Error("Insufficient funds");
        }

    } catch (error) {
        console.error("Fetch error:", error);        
    }



}





// export const topUpWalletFunction = async (userLoggedIn, topUp) => {
//     let accountId =
//       userLoggedIn && typeof userLoggedIn !== "undefined"
//         ? userLoggedIn.account.accountId
//         : 1;
  
//     try {
//       const response = await fetch(`http://localhost:5138/api/Account/${accountId}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       let data = await response.json(); // <-- Get the user data, which contains balances
//       data = data[0];
  
//       console.log("TopUp data = Account: ", data, " TopUp: ", topUp);
  
//       let updatedData = { ...data };
  
//       switch (topUp.currency) {
//         case "balance_h2":
//           updatedData.balance_h2 = parseInt(data.balance_h2) + parseInt(topUp.amount);
//           break;
//         case "balance_li":
//           updatedData.balance_li = parseInt(data.balance_li) + parseInt(topUp.amount);
//           break;
//         case "balance_pd":
//           updatedData.balance_pd = parseInt(data.balance_pd) + parseInt(topUp.amount);
//           break;
//         case "balance_xe":
//           updatedData.balance_xe = parseInt(data.balance_xe) + parseInt(topUp.amount);
//           break;
//         default:
//             console.log("TopUp currency: ", topUp.currency);
            
//           throw new Error("Unknown currency type");
//       }
  
//       const putResponse = await fetch(`http://localhost:5138/api/Account/${accountId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedData),
//       });
  
//       if (!putResponse.ok) {
//         throw new Error(`HTTP error! status: ${putResponse.status}`);
//       } else {
//         console.log("Balance added successfully");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };
  