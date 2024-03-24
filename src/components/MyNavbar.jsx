import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/firebase';

//import { FirebaseError } from 'firebase/app';

const MyNavbar=()=> {
 const firebase=useFirebase();
 const navigate=useNavigate()


 
const logout=()=>{
  firebase.signOutwithcurrentUser();
  navigate("/login");
}
  return (
     
        <Navbar bg="dark" data-bs-theme="dark" className='h-20  ' >
       <div className='h-24 flex flex-row  items-center space-x-9 pl-5'>
      <Navbar.Brand className='text-white ' href="#home"><img
          className="mx-auto h-10 w-auto"
          src="https://th.bing.com/th/id/OIP.TN139HIW_hKAZlSr5JpsRQHaBf?rs=1&pid=ImgDetMain"
          alt="resume buider icon"
        /></Navbar.Brand>
      <Nav className="me-auto ">
        <Nav.Link className='text-white' href="/">Home</Nav.Link>
        <Nav.Link  className="text-white"href="/dashboard">Dashboard </Nav.Link>
        
        <Nav.Link  className=" text-white"href="/team">Teams</Nav.Link>
        <Nav.Link  className=" text-white"href="/about">About</Nav.Link>
      </Nav>
     
      <div>
        {
          firebase.isloggedin?(<Button className='text-2xl' onClick={logout}>Logout</Button>):(<div className='space-y-2 text-2xl '>
            <Button onClick={e=>navigate("/login")}>Login</Button> <Button onClick={e=>navigate("/register")}>Signup</Button>
          </div>)
        }
      </div>
      
   </div>
  </Navbar>
  


  
  
      
    
  );




}

export default MyNavbar;