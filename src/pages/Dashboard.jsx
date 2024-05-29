import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useFirebase } from '../context/firebase'
import {  Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import Temp3 from '../components/ResumeTemp/Temp3'
import Temp4 from '../components/ResumeTemp/Temp4'




const Dashboard = () => {
  const firebase=useFirebase();
const isloggedin=firebase.isloggedin;
const navigate=useNavigate();
const[isloading,setIsloading]=useState(true)

useEffect(()=>{
 setTimeout(() => {
    if(!isloggedin){
      navigate("/login") && toast.error("Please Login First")
  }
 }, 2000);
},[])
  


  
const cardDetails=[
  
    {  id:'temp1',
      title: 'Template1',
      des: 'This template can be used for experienced and project based resume .',
      imageUrl: "..images/temp1.png",
        
    },
    {  id:'temp2',
      title:  'Template2',
      des: 'this is second card ,This template can be used for experienced and project based resume',
      imageUrl:
        "..images/temp2.png",
    },
    {  id:'temp3',
    title: 'Template3',
    des: 'this is third card ,This template can be used for experienced and project based resume',
    imageUrl:
      "..images/temp3.png",
  },
  {  id:'temp4',
  title: 'Template4',
  des: 'this is fourth card ,This template can be used for experienced and project based resume',
  imageUrl:
    "..images/temp4.png",
},





]

  return (
   
    <div className='min-h-screen w-full flex items-center justify-center p-0 bg-blue-950'>
      
        <div>
         
       
        <header className=" bg-white w-[100vw] shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl pt-4 font-bold tracking-tight text-gray-900 text-center font-serif"> WELCOME TO DASHBOARD</h1>
            <h5 className="text-2xl pt-4  tracking-tight text-gray-900 text-center font-serif"> Choose a Template</h5> 
          </div>
        </header>
        <main >  
         
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
      
    
    </div>
   

   
    
 
  )
}

export default Dashboard