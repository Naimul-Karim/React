import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import UserContextProvider from '../Context/UserContextProvider'


function Login() {
    const [username , setUsername] = useState("")
    const [ Password ,setPassword] =useState("")

    const {setUser} = useContext(UserContext)


    const handleSubmit = (event)=>{
        event.preventDefault()
        setUser({username, Password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input type=" text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Username...' />
        <input type=" text" 
        value={Password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password...' />
        <button 
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login