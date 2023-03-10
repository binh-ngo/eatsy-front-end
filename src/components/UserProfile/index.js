import {React, useState} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './style.css'

function UserProfile(props) {
// TODO: Handle the user profile update functionality
  // const newName = document.getElementById("formBasicUsername")
  // const newEmail = document.getElementById("formBasicEmail")
  // const newAddress = document.getElementById("formBasicAddress")
  const [name, setName] = useState(props.name)
  const [placeholder, setPlaceholder] = useState(props.name)
  const [email, setEmail] = useState(props.email)
  const [address, setAddress] = useState(props.address)
  
  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;
    if(inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if(inputType ==="address") {
      setAddress(inputValue);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setAddress('');
  }
// TODO: WIP
  // function changeInfo() {
  //   setName(newName.value)
  //   setEmail(newEmail.value)
  //   setAddress(newAddress.value)
  //   window.location.reload();
  // }
// TODO: WIP
  function editUserInfo(event) {
    event.preventDefault();
    const userInfoObj = {
      username: document.querySelector('#formBasicUsername').value,
      email: document.querySelector('#formBasicEmail').value,
      address: document.querySelector('#formBasicAddress').value,
    }
    console.log(userInfoObj)
  }


  return (
    <Container className="userProfile">
      <Row className="userProfileUnderline">
        <Col sm="11">
          <p>User Info</p>
        </Col>
        <Col sm="1">
          <Button onClick={editUserInfo} variant="success">Edit</Button>{" "}
        </Col>
      </Row>
      <Row>
        <Form controlId="userInfoForm">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control value={name} name="name" onChange={handleInputChange} type="text" placeholder={placeholder} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} name="email" onChange={handleInputChange} type="email" placeholder={email} />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control value={address} name="address" onChange={handleInputChange} type="email" placeholder={address} />
          </Form.Group>

          <Button variant="primary" onSubmit={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default UserProfile;
