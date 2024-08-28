
  // Temporary api call for demonstration purposes
  // example POST request: 
  //    {
  //    "username": "john",
  //    "email": "john@mail.com"
  //    }

export const fetchData = async (props) => {

    // let randomId = Math.floor(Math.random() * 3) + 36;
    let randomId = 1;

    let userId = props && typeof props !== "undefined" ? props : randomId;
    
  try {
    const response = await fetch(`http://localhost:5138/api/UsersInfo/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {username: "dummy", email: "dummy"} //<-- this type of error handling is pretty bad, but due to react's dev environment crashing
    // when an error is thrown, this is the only way to keep the app running while trying to error handle.
    // so I've taken a conditional rendering approach based on recieving this "dummy" data.
  }
};
