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
      description: document.querySelector("#newUserDescription").value
    }
    console.log(userObj)

    API.createUser(userObj).then(data => {
      console.log(data);

      if (data.token) {
        props.setToken(data.token);
        props.setIsLoggedIn(true);
        props.setUsername(data.user.username)
        localStorage.setItem("token", data.token)
        navigate("/profile")
      } else {
        alert("msg: invalid sign up credentials")
      }
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

            <Form.Group className="mb-3 lato" controlId="newUserEmail">
              <Form.Control type="email" placeholder="example@email.com" />
            </Form.Group>

            <Form.Group className="mb-3 lato" controlId="newUserPassword">
              <Form.Control className="lato" type="password" placeholder="Password" />
            <Form.Text className="text-muted" id="filterTagFormText">
            (minmum 8 characters)
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 lato" controlId="newUserDescription">
              <Form.Control type="text" placeholder="Tell us about your food!" />
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