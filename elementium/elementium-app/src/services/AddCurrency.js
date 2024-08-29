export const addCurrency = async (args) => {
  //example of expected args: userId = 1, amount = 100, currency = "h2"

  let userId, // <-- Gets the user ID from the args
    currency, //<-- This specifies wich currency the user is adding to
    amount = args; // <-- This will be the amount "purchased" by teh user for the top-up

  // these are just placeholder variables for each currecnyt that we will either add to (depending on the currecny selected) or
  // keep the same if its another curecny being added to.
  let balance_h2;
  let balance_li;
  let balance_pd;
  let balance_xe;

  try {
    const response = await fetch(`http://localhost:5138/api/Account/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // <-- this is the json data of the user so we can extreact the balances of the currencies

    balance_h2 = data.balance_h2;
    balance_li = data.balance_li;
    balance_pd = data.balance_pd;
    balance_xe = data.balance_xe; //<-- Here we set each of the placeholder variables with the actual balances from the user.
  } catch (error) {
    console.error("Fetch error:", error);
  }

  switch (
    currency // <-- now we set up a switch to determine which currency is going to be tpo-upped
  ) {
    case "h2":
      balance_h2 += amount;
      break;
    case "li":
      balance_li += amount;
      break;
    case "pd":
      balance_pd += amount;
      break;
    case "xe":
      balance_xe += amount;
      break;
  }

  const payload = {
    //<- now the payload can look the same and will contain the old balances of the other currencies and the new balance for the top-upped currency depending on the swtich.
    balance_h2,
    balance_li,
    balance_pd,
    balance_xe,
  };

  //   try { //<-- thsi next try catch will put the new balances into the user account
  //     const response = await put(
  //       `http://localhost:5138/api/Account/${userId}`,
  //       payload
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return data;
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  try {
    const putResponse = await fetch(
      `http://localhost:5138/api/Account/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (!putResponse.ok) {
      throw new Error(`HTTP error! status: ${putResponse.status}`);
    }
    return await putResponse.json(); // Return the response from the PUT request
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
