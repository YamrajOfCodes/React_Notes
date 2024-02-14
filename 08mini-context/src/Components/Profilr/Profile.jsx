import React, { useContext } from 'react'
import usercontext from '../../context/usercontext'
function Profile() {

    const {value}=useContext(usercontext);

    if(value){
        return(
            <p>Hello {value.username}</p>
        )
    
    }

    return <div>Please Login</div>
}

export default Profile