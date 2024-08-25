import React from "react";


  // Temporary api call for demonstration purposes
  // example POST request: 
  //    {
  //    "username": "john",
  //    "email": "john@mail.com"
  //    }

export const fetchData = async (props) => {

    let randomId = Math.floor(Math.random() * 3) + 36;

    let userId = props && typeof props !== "undefined" ? props : randomId;
    
  try {
    const response = await fetch(`http://localhost:5138/api/UsersInfo/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
