import { useState, useEffect } from "react";

function useCurrencyInfoHook(currency){
    const[data , setdata] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then((response)=>{
return response.json()
})
.then((data)=>{
    return setdata(data[currency])
    
})
.catch((error)=>{
    console.log(error);
    
})
    },[currency])
    console.log(data);
    return data;
    
}
 export default useCurrencyInfoHook;