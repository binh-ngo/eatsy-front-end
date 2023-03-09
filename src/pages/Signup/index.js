import React from 'react'
import './style.css'
import { Container, Row, Form, Button } from 'react-bootstrap'

function Signup() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [address, setAddress] = useState('')
  function signUpHandler() {
// TODO:
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <h1>Sign Up</h1>
      <Form className='signup'>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><strong>Username</strong></Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><strong>Email</strong></Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control type="text" placeholder="Password" /> 
        </Form.Group>

        <Button onClick={signUpHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Row>
      </Container>
    </div>  )
}

export default Signup