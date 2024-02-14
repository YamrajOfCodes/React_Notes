import React, { useState } from 'react'
import usercontext from './usercontext'

function UsercontextProvider({children}) {
const [value,setvalue]=useState("");                     // jar ya madhe API call cha data add karaycha asel tr yachi default value {} dya
 

  return (
    <usercontext.Provider value={{            // konti value cha access dyaycha aahe
        value,setvalue
    }}>
        {children}                                    {/*  means konte element render karayche aahet   */}

    </usercontext.Provider>
  )
}

export default UsercontextProvider



// context ek swata provider aahe pn tyachi method call karavi lagel  mhnun usercontext.Provider     

