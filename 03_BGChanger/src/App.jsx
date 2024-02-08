import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
//  function colorChanger(e){
//    document.body.style.backgroundColor=`${e.target.value}`
//    console.log(e.target.value);
//  }


// second Way


 const [color,setcolor]=useState("olive")   
 document.body.style.backgroundColor=color;
 
 



  // const
  return(
   <>
   
     {/* <div className="container" style={{display:'flex',gap:'10px'}}>
      <button onClick={colorChanger} value={"red"}>Red</button>
      <button onClick={colorChanger} value={"orange"}>Orange</button>
      <button onClick={colorChanger} value={"green"}>Green</button>
      <button onClick={colorChanger} value={"white"}>White</button>
      <button onClick={colorChanger} value={"blue"}>Blue</button>
     </div> */}




      {/* Second Way  */}

       <div className="container" style={{display:'flex',gap:'10px'}}>
      <button onClick={()=>{setcolor("red")}} >Red</button>
      <button onClick={()=>{setcolor("orange")}}>Orange</button>
      <button onClick= {()=>setcolor("green")}>Green</button>
      <button onClick= {()=>{setcolor("white")}}>White</button>
      <button onClick={()=>setcolor("blue")} >Blue</button>
     </div>

   
   </>
  ) 



}
  


export default App
