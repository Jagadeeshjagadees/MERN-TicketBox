import React, { useState } from "react";

import {Row,Col, CardLink} from 'react-bootstrap'
import Container from "react-bootstrap/esm/Container";
import image1 from '../assets/movie-pic1.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup({setUser}){
  const navigate=useNavigate();
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  /*
    const [data,setData]=useState({
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    });
   const {name,email,password,confirmPassword}=data;
   
    
   const handleChange=(e)=>{
setData({...data,[e.target.name]:[e.target.value]})
   }
   */
    const handleSubmit=(e)=>{
      e.preventDefault();
        localStorage.setItem('userEmail',email);
        setUser(email);
        //console.log(data)
        
        
       
        if(email === ""){
          alert('Please enter valid Details')
        }else if(name===""){
          alert('Please enter valid Details')
        }else if (password===""){
          alert('Please enter valid Details')
        }
         else{
          
           // adding server 
        axios.post('http://localhost:2000/newuser',{name,email,password})
        //navigate to home page
        navigate('/login')
        }
        
        
    }
    return(<div className="container-log">
        <Container >
            <Row >
              
                <Col className="col"><img  src={image1} height={380} width={380}/> </Col>
                <Col className="col two">
                <Card style={{width:'25rem',padding:24}}>
                    <Card.Body>
                    <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name"  value={name} placeholder="Enter Your Name" 
       onChange={(e)=>{setName(e.target.value)}}
       
        />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
{/*}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
      </Form.Group>
  */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="login-btn" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <div style={{display:"flex",justifyContent:'center'}}>Already have an account?  <CardLink href="/login">Please Login</CardLink></div>
   

                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>)
}