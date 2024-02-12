import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Github() {
const[data,setdata]=useState([]);
// const {abc}=useParams();

 useEffect(()=>{
  fetch("https://api.github.com/users/YamrajOfcodes")
  .then((res)=>res.json())
  .then((data)=> setdata(data));
  console.log(data);

 },[]);


  return (
    <>
    {/* <p>{abc}</p> */}

    <p>{data.followers}</p>
    <img src={data.avatar_url} alt="image" srcset="" />
  
    </>
  )
}

export default Github