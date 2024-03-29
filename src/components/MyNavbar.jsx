import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/firebase';
import { useEffect } from 'react';

//import { FirebaseError } from 'firebase/app';

const MyNavbar=()=> {
 const firebase=useFirebase();
 const navigate=useNavigate()

 const loggedout=()=>{
    firebase.signOutwithcurrentUser();
    navigate("/")
}


  return (
      

     
        <Navbar  collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className='w-[100vw] ' >
       <div className='flex justify-start items-center space-x-5 pl-8 '>
      <Navbar.Brand className='text-white ' href="#home"><img
          className="mx-auto h-10 w-auto visible  "
          src="https://th.bing.com/th/id/OIP.TN139HIW_hKAZlSr5JpsRQHaBf?rs=1&pid=ImgDetMain"
          alt="resume buider icon"
        /></Navbar.Brand>
      <Nav className="me-auto flex flex-row space-x-3  ">
        <Nav.Link className='text-white' href="/">Home</Nav.Link>
        <Nav.Link  className="text-white"href="/dashboard">Dashboard </Nav.Link>
        
        
        <Nav.Link  className=" text-white"href="/about">About</Nav.Link>
      </Nav>
     
      <div>
        {
          firebase.isloggedin?(<Button className='text-2xl'  onClick={loggedout}>Logout</Button>):(<div className='space-y-2 text-2xl '>
            <Button onClick={e=>navigate("/login")}>Login</Button> <Button onClick={e=>navigate("/register")}>Signup</Button>
          </div>)
        }
      </div>
      
   </div>
  </Navbar>

  
  


  
  
      
    
  );




}

export default MyNavbar;