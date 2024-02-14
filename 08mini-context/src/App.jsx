import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './Components/Profilr/Login'
import Profile from './Components/Profilr/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UsercontextProvider>                      
      <Login/>
      <Profile/>

     </UsercontextProvider>
   </>
  )
}

export default App
