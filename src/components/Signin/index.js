import React from 'react'
import './style.css'
import Form from "react-bootstrap/Form";

function Signin() {
  return (
    <div>
      <Form className='signin'>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" /> 
        </Form.Group>
      </Form>
    </div>
  )
}

export default Signin