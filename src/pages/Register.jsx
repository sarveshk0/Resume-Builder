import React, { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/firebase';

const Register = () => {
    const firebase=useFirebase();
  console.log(firebase);
  const navigate=useNavigate();
  useEffect(()=>{
       if(firebase.isloggedin){
           navigate("/")
       }
  },[firebase,navigate])


  const[email,setEmail]=useState("");
  const[password,Setpassword]=useState("");

  const HandleSubmit= async(e)=>{
         e.preventDefault()
       console.log("Sigingup User");
      const result= await firebase.userCreation(email,password);
      console.log(" Signin successfull ", result);
 }

  return (
    // <div className='container'>
    //     <Form onSubmit={HandleSubmit}>
    //   <Form.Group  className="mb-3" controlId="formGroupEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder="Enter email" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formGroupPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" onChange={(e)=>Setpassword(e.target.value)} value={password} placeholder="Password" />
    //   </Form.Group>
    //   <Button  variant="primary" type="submit">
    //     Creat User
    //   </Button>

    // </Form>
    // </div>


    <div className='min-h-screen w-full h-full '>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className=" bg-blue-950 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://th.bing.com/th/id/OIP.TN139HIW_hKAZlSr5JpsRQHaBf?rs=1&pid=ImgDetMain"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Creat Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form  onSubmit={HandleSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
              Email address
            </label>
            <div className="mt-2">
              <input  onChange={(e)=>setEmail(e.target.value)} value={email} 
              placeholder='Enter your Email'
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
                Password
              </label>
            
            </div>
            <div className="mt-2">
              <input onChange={(e)=>Setpassword(e.target.value)} value={password}
               placeholder='at least 6 character'
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className=''>
            <button
              type="submit"
              className="flex w-full mt-12  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Creat Account
            </button>
          </div>
        </form>

      
      </div>
    </div>
  </div>


  )
}

export default Register