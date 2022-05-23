export function getUserDetails(payload){

     return {
         type:"USER_DETAILS",
         payload
     }
}




export function incrementOrdecrement(payload){

    console.log(payload);

    return {
        type:"incrementOrdecrement",
        payload
    }
}