import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount]=useState(0);

  const increment=()=>{
    if(count<20){
      setcount(count+1);

    }
  }

  const decrement=()=>{
    if(count>0){
      setcount(count-1);
    }
  }



  return(
    < >
    
    <div style={{height:'50px',width:"100px",marginLeft:'70px'}}>{count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    
    </>
  )
 
}

export default App
