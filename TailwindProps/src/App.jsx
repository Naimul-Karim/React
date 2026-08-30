import { useState } from 'react'

import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-600 p-5 text-black rounded-md width'>Tailwind Test</h1>
    <Card price='3.01' SerialNo="#423"/>
    <Card price='5' SerialNo="#533"/>
    <Card/>
    
    

    
      
    </>
  )
}



export default App
// export default Card3