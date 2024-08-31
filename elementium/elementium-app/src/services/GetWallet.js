


export const GetWallet = async (userLoggedIn) => {



    // // For when the Account and Status are correctly attached to the user / DTO created: ================================
    let accountId = userLoggedIn.account.accountId;
    let balance_h2;
    let balance_li;
    let balance_pd;
    let balance_xe;
    
    try {
        const response = await fetch(`http://localhost:5138/api/Account/${accountId}`);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        let data = await response.json();
        console.log("AAAAAAA GetWallet.js - data: ", data);
        
        data = data[0];
    
        balance_h2 = data.balance_h2;
        balance_li = data.balance_li;
        balance_pd = data.balance_pd;
        balance_xe = data.balance_xe;
    } catch (error) {
        console.error("Fetch error:", error);
    }
    
    const dataBody = {
        balance_h2,
        balance_li,
        balance_pd,
        balance_xe,
    };
    console.log("GetWallet.js - dataBody: ", dataBody);
    
    return dataBody;
    // // ================================================================================================================





    // Temp function for milestone: ======================================================================================
    // console.log("GetWallet.js - userId: ", userId);
    // let dataBody = {
    //     balance_h2: 100,
    //     balance_li: 100,
    //     balance_pd: 100,
    //     balance_xe: 0
    // }
    // return dataBody;
    // ================================================================================================================
}