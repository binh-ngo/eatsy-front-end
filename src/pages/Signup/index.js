import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'
import { Container, Row, Form, Button } from 'react-bootstrap'
import API from "../../utils/api"

function Signup(props) {
  const navigate = useNavigate();
  function signUpHandler(e) {
    e.preventDefault()
    const userObj = {
      username: document.querySelector("#newUserName").value,
      email: document.querySelector("#newUserEmail").value,
      password: document.querySelector("#newUserPassword").value,
      // TODO change (add another input)
      description: "test kitchen"
    }
    console.log(userObj)

    API.createUser(userObj).then(data => {
      console.log(data);
      if (data.err) {
        // TODO tell the user they need to change one of their signup fields.
        console.log(err)
      }
      if (data.token) {
        props.setToken(data.token);
        props.setIsLoggedIn(true);
        props.setUsername(data.user.username)
      }
      localStorage.setItem("token", data.token)
      //  TODO add newUser localstorage item to bring new users to their profile and create a tutorial
      // localStorage.setItem("newUser", true);
      navigate("/profile")
    })
  }

  return (
    <div className='wrapper signInUpHero'>
      <Container fluid>
        <Row className="justify-content-center">
          <Form className='signup'>
            <h1 className="bowlby">SIGN UP</h1>
            <Form.Group className="mb-3" controlId="newUserName">
              <Form.Control className="lato" type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="newUserEmail">
              <Form.Control className="lato" type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="newUserPassword">
              <Form.Control className="lato" type="password" placeholder="Password" />
            </Form.Group>

            <Button className="btn-style-secondary lato" onClick={signUpHandler} variant="light" type="submit">
              Sign Up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>)
}

export default Signup