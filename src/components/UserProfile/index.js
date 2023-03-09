import {React, useState} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './style.css'

function UserProfile(props) {
// TODO: Handle the user profile update functionality
  const newName = document.getElementById("formBasicUsername")
  const newEmail = document.getElementById("formBasicEmail")
  const newAddress = document.getElementById("formBasicAddress")
  const [name, setName] = useState(props.name)
  const [email, setEmail] = useState(props.email)
  const [address, setAddress] = useState(props.address)
// TODO: WIP
  function changeInfo() {
    setName(newName.value)
    setEmail(newEmail.value)
    setAddress(newAddress.value)
    window.location.reload();
  }
// TODO: WIP
  function editUserInfo(event) {
    event.preventDefault();
  }

  return (
    <Container className="userProfile">
      <Row className="userProfileUnderline">
        <Col sm="11">
          <p>User Info</p>
        </Col>
        <Col sm="1">
          <Button onClick={editUserInfo} variant="primary">Edit</Button>{" "}
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder={name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder={email} />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="email" placeholder={address} />
          </Form.Group>

          <Button variant="primary" onSubmit={changeInfo}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default UserProfile;
