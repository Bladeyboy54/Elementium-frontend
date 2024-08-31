
  // Temporary api call for demonstration purposes
  // example POST request: 
  //    {
  //    "username": "john",
  //    "email": "john@mail.com"
  //    }

export const fetchUserData = async (userLoggedIn) => {

    let randomId = 1; // <-- this is a dummy id to demo with
    let userId = userLoggedIn && typeof userLoggedIn !== "undefined" ? userLoggedIn.userId : randomId;
    
  try {
    const response = await fetch(`http://localhost:5138/api/UsersInfo/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0]);
    


    let cardNumbers = Math.random().toString().slice(2, 18); //<-- small silly little add on to show show card numbers
    data[0] = {
      ...data[0],
      cardNumbers: cardNumbers
    }
    
    

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {username: "Felix", email: "King"} //<-- this type of error handling is pretty bad, but due to react's dev environment crashing
    // when an error is thrown, this is the only way to keep the app running while trying to error handle.
    // so I've taken a conditional rendering approach based on recieving this "dummy" data.
   }
};
