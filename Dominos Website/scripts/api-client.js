export async function apiCall(URL){
    // ES6 API Call
    // const MAX = 10;
    //const promise =fetch(URL); // Async Way
    try{
    const response = await fetch(URL);
    return response; // response wrapped in promise
    }catch(err){
        throw err;
    }
    // States = Pending, FullFilled/ Reject
    //return promise;
}