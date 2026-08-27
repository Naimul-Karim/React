import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let[counter , setcounter] = useState(15);
  // counter = 15;
  const addValue = ()=>{
    console.log("Clicked" , counter);
    if(counter<20)
    setcounter(counter +1)    
  }
  


  const removeValue = ()=>{
    console.log("Clicked" , counter);
    if(counter>0) 
    setcounter(counter -1)    
  }
  

  return (
    <>
      
      <h1>Counter {counter}</h1>
      <button id='button' onClick = {addValue}>
        
        Add value</button>
      <br />
      <button id='button' onClick = {removeValue}>
        
        Decrease value</button>

    </>
  )
}

export default App
