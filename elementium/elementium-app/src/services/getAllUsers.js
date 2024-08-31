export const getAllUsers = async () => {
  try {
    const response = await fetch(`http://localhost:5138/api/UsersInfo`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 

    console.log("LOOK AT ME>>>>>>>>>>>>>>>>>", data);
      
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return error; 
  }
};