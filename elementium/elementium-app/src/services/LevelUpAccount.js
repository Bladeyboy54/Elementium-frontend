export const levelUpAccount = async (userLoggedIn) => {
  let accountId =
    userLoggedIn && typeof userLoggedIn !== "undefined"
      ? userLoggedIn.account.accountId
      : 1;

  try {
    const response = await fetch(
      `http://localhost:5138/api/Account/${accountId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json(); // <-- this is the json data of the user so we can extreact the balances of the currencies
    data = data[0];

    console.log("data: ", data);


    //   STILL WORKING HERE: DONT TOUCH.....
    const putResponse = await fetch(
      `http://localhost:5138/api/Account/${accountId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          "accountStatusId": data.accountStatusId + 1,
        }),
      }
    );
    if (!putResponse.ok) {
      throw new Error(`HTTP error! status: ${putResponse.status}`);
    } else {
      console.log("Account level up successful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
