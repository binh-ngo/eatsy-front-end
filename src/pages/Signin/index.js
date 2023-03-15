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
      username: document.querySelector("#singInUsername").value,
      password: document.querySelector("#singInPassword").value
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
    <div>
      <Container fluid>
        <Row className="justify-content-center">
        <h1 id='signInTitleText'>SIGN IN</h1>
      <Form className='signin'>
      <Form.Group className="mb-3" controlId="singInUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="singInPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" /> 
        </Form.Group>

        <Button onClick={signInHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Signin