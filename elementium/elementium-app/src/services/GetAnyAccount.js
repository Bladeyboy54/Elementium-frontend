
export const fetchAnyAccountData = async (id) => {

    let userId = id && typeof id !== "undefined" ? id : randomId;
    
  try {
    const response = await fetch(`http://localhost:5138/api/Account/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();  
    data = data[0]
    console.log("GetAccount.js - data: ", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {username: "Felix", email: "King"} 
  }
};


