import React, { useContext, useState } from 'react'
import usercontext from '../../context/usercontext';
function Login() {

  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const {setvalue}=useContext(usercontext);

  const handle=(e)=>{

   e.preventDefault();
  setvalue({username})

  }

  return (
    <>
    <h2>Login</h2>
    <div>
        <input type="text" value={username} placeholder='Enter username' onChange={(e)=>setusername(e.target.value)}/>
        <input type="password" value={password} placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handle}>Submit</button>
    </div>
    </>
  )
}

export default Login