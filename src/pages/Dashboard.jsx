import React from 'react'
import Card from '../components/Card'
import { useFirebase } from '../context/firebase'





const Dashboard = () => {
  const firebase=useFirebase();
const isloggedin=firebase.isloggedin;

   
  
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
        !isloggedin?(<h1 className='bg-blue-950 text-white mt-12 h-18 w-[100vw] flex items-center justify-center'>Please Login </h1>):
        cardDetails.map((cardDetail)=>( 
        <Card cardDetail= {cardDetail} key={cardDetail.id}  {...cardDetail}/>
     ))
      }
   

    </div>
  </main>
    </div>
    
 
  )
}

export default Dashboard