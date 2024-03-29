import {Routes,Route} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import MyNavbar from "./components/MyNavbar"
import Home from "./pages/Home"

import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forms from "./pages/Forms"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeTemp from "./pages/ResumeTemp"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <ToastContainer/>
       <MyNavbar />
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/dashboard" element={<Dashboard/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path= "/dashboard/forms/:id"  element={<Forms/>}></Route>
    
     <Route path="/dashboard/forms/resumetemp/:param1/:param2" element={<ResumeTemp />}></Route>
   
   
    </Routes>
    <Footer/>
      </div>
     



  )
}

export default App