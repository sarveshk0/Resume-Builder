import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useFirebase } from '../context/firebase';
import { FcGoogle } from "react-icons/fc";
import {  toast } from 'react-toastify';

const Login = () => {
    const firebase=useFirebase();
  console.log(firebase);
  const navigate=useNavigate();

  useEffect(()=>{
       if(firebase.isloggedin){
           navigate("/dashboard")
       }
  },[firebase])

  const[email,setEmail]=useState("");
  const[password,Setpassword]=useState("");

  const HandleSubmit= async(e)=>{
         e.preventDefault()
       console.log("loginUser");
      const result= await firebase.loginuser(email,password);
      console.log(" Login successfull ", result);
        toast.success(" Login successfull ", result)
      
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
    //     Login
    //   </Button>

    // </Form>
    // <h1>OR</h1>
    // <Button onClick={firebase.SigninWithGoogle} >SignInWithGoogle</Button>
    // </div>



    <div className=' w-full'>
   
  
    <div className=" bg-blue-950 flex min-h-full flex-1 flex-col justify-center px-10  pt-40  lg:px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={require('../images/logo.png')}
          alt="resume buider icon"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
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
               placeholder='Enter Your email'
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
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input onChange={(e)=>Setpassword(e.target.value)} value={password}
               placeholder='Enter Your Password'
               id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button 
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>

          
          
          
           <button onClick={firebase.SigninWithGoogle}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           type="submit"
           ><FcGoogle size={25}/> Sign In
           </button>
          
        
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="/Register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Create account
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login