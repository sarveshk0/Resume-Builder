import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import CookieConsent from "./components/CookieConsent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

// Lazy loading components
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./components/Login"));
const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Forms = lazy(() => import("./pages/Forms"));
const ResumeTemp = lazy(() => import("./pages/ResumeTemp"));

const App = () => {
  return (
    <div className="w-full font-serif">
      <CookieConsent />
      <ToastContainer />

      <MyNavbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/forms/:id" element={<Forms />} />
          <Route path="/dashboard/forms/resumetemp/:param1/:param2" element={<ResumeTemp />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
