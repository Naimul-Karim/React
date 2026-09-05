import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const  data= useLoaderData()
    // const[ data , setdaTA] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Naimul-Karim')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setdaTA(data)
            
    //     })
    // },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-2xl">
            Github Followers : {data.followers}
            <img className='' src={data.avatar_url} alt="Github Profile"  width={300}/>


        </div>
        
    )
}

export default Github

export const githubInfoLoader = async() => {
   const response =await  fetch('https://api.github.com/users/Naimul-Karim')
   return response.json()
}