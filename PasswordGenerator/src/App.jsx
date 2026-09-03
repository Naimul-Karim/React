import { useCallback, useState, useRef , useEffect } from 'react';

import './App.css'

function App() {
const [Password, setPassword] = useState("");
const [NumberAllowed, setNumberAllowed] =useState("False")
  const [CharAllowed, setCharAllowed] =useState("False")
  const [length,setlength] = useState("8")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass= "";
    let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(NumberAllowed) string += "1234567890"
    if(CharAllowed) string +="!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)}
      setPassword(pass)


  },[length,CharAllowed,NumberAllowed,setPassword])

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  })
  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, CharAllowed, passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto my-auto shadow-md rounded-lg px-4 py-3 bg-amber-950 text-white-450 text-shadow-yellow-50 '>
      <h1 className='text-white text-shadow-white text-center my-3 '>Password Generator</h1>

      <div className='flex shadow rounded-xl  py-3 overflow-hidden mb-4 '>
        <input 
        type="text" 
        value= {Password}
        placeholder='Password'
        className=' bg-gray-50 text-black outline-none w-full py-1 px-3 rounded-lg '
        readOnly
        ref={passwordRef}

           />
      <button className=' outline-none bg-black rounded-lg px-5 py-2 mx-2 '
      onClick={copyPasswordtoClipboard}
      >Copy</button>
      </div>
      <div className='flex text-sm gap-x-4'>
      <div className='flex items-center gap-x-3'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
         />
        <label htmlFor="">Length: {length}</label>
      </div>

      <div  className='flex items-center gap-x-1'>
        <input type="checkbox" 
         id="Number"
         defaultChecked = {NumberAllowed}
         onChange={()=>{
          setNumberAllowed((prev)=> !prev)
         }}
          />
        <label htmlFor="Number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"  id="Character" defaultChecked = {CharAllowed}
        onChange={()=>{
          setCharAllowed((prev) => !prev)
        }} />
        <label htmlFor="Character">Characters</label>
      </div>
      </div>
      </div>
    
     
    </>
  )
}

export default App
