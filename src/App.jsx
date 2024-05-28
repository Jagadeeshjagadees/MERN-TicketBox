import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/movie-pic2.png'
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import { Button } from "react-bootstrap";
import { Route,BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Success from "./Components/Success";
import SelectSeat from "./Components/SelectSeat";
// routing



/*

const Router=createBrowserRouter([
  {
    path:'/login',
    element:<Login />
}, 
{
  path:'/signup',
  element:<Signup />
},
 {
  path:'/',
  element:<Home />
}
])*/

function App(){
  const navigate=useNavigate()
  const [user,setUser]=useState('');
  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail);
    }
  },[user]);
  const handleLogout=()=>{
    localStorage.removeItem('userEmail');
   // window.location.href='/login';
   setUser(null);
   navigate('/login')
   
  }
  return(<div>


<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ticket Box
          </Navbar.Brand>
         {user && <Button onClick={()=>handleLogout()} className="logout-btn">Logout</Button>}
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/select" element={<SelectSeat />} />
        <Route path="success" element={<Success />} />
      </Routes>

  </div>)
}

export default App ;