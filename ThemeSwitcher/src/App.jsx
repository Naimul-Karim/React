import { useEffect, useState } from 'react'


import { ThemeProvider } from './Contexta/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/card'

function App() {
  const [ themeMode , setTheme ] = useState("light")

  const lightTheme = ()=>{
    setTheme("light")
  }
  const darkTheme = ()=>{
    setTheme("dark")
  }


  
  useEffect(() => {
    console.log("Theme:", themeMode);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);

    console.log("HTML:", document.documentElement.className);
}, [themeMode]);

  

  return (
   <ThemeProvider value={{themeMode, darkTheme , lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>

  )
}

export default App
