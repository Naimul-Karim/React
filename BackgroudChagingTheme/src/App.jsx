import { useState } from 'react'


import './App.css'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className=' w-full h-screen duration-200 ' 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 "> 
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white rounded-xl px-3 py-3 "> 
          <button  
          onClick={()=> setColor("red")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "red"}}>Red</button>
          <button  
          onClick={()=> setColor("blue")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "blue"}}>Blue</button>
          <button  
          onClick={()=> setColor("white")}
          className="outline-none px-4 rounded-full px-4 py-1 text-black"
          style={{backgroundColor: "white"}}>White</button>
          <button  
          onClick={()=> setColor("yellow")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button  
          onClick={()=> setColor("maroon")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "maroon"}}>Maroon</button>
          <button  
          onClick={()=> setColor("purple")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "purple"}}>Purple</button>
          <button  
          onClick={()=> setColor("orange")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "orange"}}>Orange</button>
          <button  
          onClick={()=> setColor("pink")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "pink"}}>Pink</button>
          <button  
          onClick={()=> setColor("silver")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "silver"}}>Silver</button>
          <button  
          onClick={()=> setColor("black")}
          className="outline-none px-4 rounded-full px-4 py-1 text-white"
          style={{backgroundColor: "black"}}>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default App
