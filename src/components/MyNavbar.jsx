// import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
// import { useEffect } from 'react';

//import { FirebaseError } from 'firebase/app';

const MyNavbar = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const loggedout = () => {
    firebase.signOutwithcurrentUser();
    navigate("/");
  };

  return (
    <div className="relative ">
      <div className="bg-blue-950 z-20  w-full fixed ">
        <h1 className="text-amber-400 text-3xl text-center font-serif text-bold">
          Online Resume Builder
        </h1>
        <h6 className="text-amber-600 text-xl text-center font-serif">
          Quick, Easy & Free
        </h6>

        <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark">
          <div className="flex text-sm justify-start items-center space-x-5 pl-8 ">
            <Navbar.Brand className="text-white " href="#home">
              <img
                className="mx-auto h-10 w-auto visible  "
                src={require("../images/logo.png")}
                alt="resume buider icon"
              />
            </Navbar.Brand>
            <Nav className="me-auto flex flex-row space-x-3  ">
              <Nav.Link className="text-white" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="/dashboard">
                Dashboard{" "}
              </Nav.Link>
              <Nav.Link className="text-white" href="/about">
                About{" "}
              </Nav.Link>
            </Nav>

            <Nav>
              {firebase.isloggedin ? (
                <Button className="text-sm" onClick={loggedout}>
                  Logout
                </Button>
              ) : (
                <div className="space-y-2 text-sm ">
                  <Button onClick={(e) => navigate("/login")}>Login</Button>{" "}
                  <Button onClick={(e) => navigate("/register")}>Signup</Button>
                </div>
              )}
            </Nav>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNavbar;
