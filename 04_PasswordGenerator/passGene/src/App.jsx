import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [text,settext]=useState("");
  const [length, setLength] = useState(8)
  const [numbers,setnumbers]=useState(false)
  const [characters,setcharacters]=useState(false)


  const passwordFunction=useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (characters) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    settext(pass)
    console.log(text);

  },[length,numbers,characters,settext])

  useEffect(()=>{
  passwordFunction();
  },[length,numbers,characters,passwordFunction])

  return (
  <>
  

  <div className="container">
    <h2>Password Generator</h2>
    <input className='input' type="text" value={text} readOnly />
    <button>Copy</button>

    <div className="div">
      <input type="range"
      min={8}
      max={15}
      value={length}
      onChange={(e)=>setLength(e.target.value)}
      />
    <label>Lenght:{length}</label>

    <input type="checkbox"
    
    onChange={()=> setnumbers((prev)=>!prev)}/>
    <label htmlFor="">Numbers</label>

    
    <input type="checkbox"
    
    onChange={()=> setcharacters((prev)=> !prev)}/>
    <label htmlFor="">Characters</label>
    </div>
  </div>
  </>
  )
}

export default App
