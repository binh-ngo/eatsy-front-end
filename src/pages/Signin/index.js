import React from 'react'
import './style.css'
import {Container, Row, Button, Form} from "react-bootstrap";

function Signin() {

  //need to complete this function 

  function signInHandler() {
  //   if (userInfo) {
  //     return window.redirect("/profile")
  //   } 
  //     window.redirect("/signin")
  //     return alert("Invalid Credentials. Try again.")
  }
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
        <h1>Log In</h1>
      <Form className='signin'>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
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