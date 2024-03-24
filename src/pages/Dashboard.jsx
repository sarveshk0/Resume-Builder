import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useFirebase } from '../context/firebase'
import {  Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'





const Dashboard = () => {
  const firebase=useFirebase();
const isloggedin=firebase.isloggedin;
const navigate=useNavigate();
const[isloading,setIsloading]=useState(true)

useEffect(()=>{

   if(!isloggedin){
    navigate("/login")
    alert("Please Login")
   }
},[])

   
  
const cardDetails=[
  
    {  id:'temp1',
      title: 'Temp1',
      des: 'this is first card ,this card basically for all users',
      imageUrl: "..images/temp1.png",
        
    },
    {  id:'temp2',
      title: 'Temp2',
      des: 'this is first card ,this card basically for all users',
      imageUrl:
        "..images/temp2.png",
    },


]

  return (
    <div>

  <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl pt-4 font-bold tracking-tight text-gray-900 text-center"> WELCOME TO DASHBOARD</h1>
      <h5 className="text-2xl pt-4  tracking-tight text-gray-900 text-center"> Choose a Template</h5> 
    </div>
  </header>
  <main>  
    <div className=" grid grid-rows-2 grid-cols-2 bg-blue-950">

      {/* <img src={require("../images/temp2.png")} alt="" /> */}
     
   
     
     
      {
        !isloggedin ?( 
        <div className='flex justify-center items-center w-[100vw] h-[50vh]' > 
            <Spinner className='w-12'  animation="border" role="status" variant='light' >
            <span className="visually-hidden ">Loading...</span>
           </Spinner>
           <h1></h1>
        </div>
     ):
       ( cardDetails.map((cardDetail)=>( 
        <Card cardDetail= {cardDetail} key={cardDetail.id}  {...cardDetail}/>
        )))
      }

      
   

    </div>
  </main>
    </div>
    
 
  )
}

export default Dashboard