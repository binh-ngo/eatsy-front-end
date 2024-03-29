import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'
import { Container, Row, Button, Form } from "react-bootstrap";
import API from "../../utils/api"

function Signin(props) {
  const navigate = useNavigate();
  function signInHandler(e) {
    e.preventDefault();
    const userObj = {
      username: document.querySelector("#signInUsername").value,
      password: document.querySelector("#signInPassword").value
    }
    API.login(userObj).then(data => {
      console.log(data);

      if (data.token) {
        props.setToken(data.token);
        props.setIsLoggedIn(true);
        props.setUsername(data.user.username)
        localStorage.setItem("token", data.token)
        navigate("/profile")
      } else {
        alert("msg: invalid sign in credentials")
      }
    })
  }

  return (
    <div className='wrapper signInUpHero'>
      <Container fluid>
        <Row className="flex justify-content-center">
          <Form className='signin'>
            <h1 className="bowlby">SIGN IN</h1>
            <Form.Group className="mb-3" controlId="signInUsername">
              <Form.Control className="lato" type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signInPassword">
              <Form.Control className="lato" type="password" placeholder="Password" />
            </Form.Group>

            <Button className="btn-style-secondary lato" onClick={signInHandler} variant="light" type="submit">
              Sign In
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default Signin