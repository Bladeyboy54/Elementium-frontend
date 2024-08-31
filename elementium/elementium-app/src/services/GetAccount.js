
  export const fetchAccountData = async (userLoggedIn) => {

    let randomId = 1; // <-- this is a dummy id to demo with
    let userId = userLoggedIn && typeof userLoggedIn !== "undefined" ? userLoggedIn.userId : randomId;
    
  try {
    const response = await fetch(`http://localhost:5138/api/Account/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();  
    // data = data.$values[0]
    console.log("GetAccount.js - data: ", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {username: "Felix", email: "King"} 
  }
};


