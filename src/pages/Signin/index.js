import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'
import {Container, Row, Button, Form} from "react-bootstrap";
import API from "../../utils/api"

function Signin(props) {
  const navigate = useNavigate();
  function signInHandler(e) {
    e.preventDefault();
    const userObj = {
      username: document.querySelector("#signInUsername").value,
      password: document.querySelector("#signInPassword").value
    }
    API.login(userObj).then(data=>{
      console.log(data);
      if(data.token){
        props.setToken(data.token);
        props.setIsLoggedIn(true);
        props.setUsername(data.user.username)
      }
      localStorage.setItem("token",data.token)
      navigate("/profile")
    })
   }

  return (
    <div className='wrapper signInUpHero'>
      <Container fluid>
        <Row className="flex justify-content-center">
      <Form className='signin'>
        <h1>Sign In</h1>
      <Form.Group className="mb-3" controlId="signInUsername">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="signInPassword">
          <Form.Control type="text" placeholder="Password" /> 
        </Form.Group>

        <Button className="colorBtn" onClick={signInHandler} variant="light" type="submit">
          Submit
        </Button>
      </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Signin