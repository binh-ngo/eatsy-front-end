import {React, useState, useEffect} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './style.css'
import API from "../../utils/api"

function UserProfile(props) {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [address, setAddress] = useState([])
  const [pName, setPName] = useState([])
  const [pEmail, setPEmail] = useState([])
  const [pAddress, setPAddress] = useState([])

  useEffect(() => {
    setPName(props.name)
    setPEmail(props.email)
    setPAddress(props.address)
  })

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
    editUserInfo();
  }

// TODO: WIP
  async function editUserInfo() {
    const userInfoObj = {
      username: document.querySelector('#formBasicUsername').value || pName,
      email: document.querySelector('#formBasicEmail').value || pEmail,
      address: document.querySelector('#formBasicAddress').value || pAddress,
    }
    await API.updateUser(pName, userInfoObj)
    window.location.reload()
  }


  return (
    <Container className="userProfile">
      <Row className="userProfileUnderline">
        <Col sm="11">
          <p>User Info</p>
        </Col>
        <Col sm="1">
          {/* TODO this btn should append the child btn to the form. Not submit! */}
          <Button onClick={editUserInfo} variant="success">Edit</Button>{" "}
        </Col>
      </Row>
      <Row>
        <Form controlId="userInfoForm">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control value={name} name="name" onChange={handleInputChange} type="text" placeholder={pName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} name="email" onChange={handleInputChange} type="email" placeholder={pEmail} />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control value={address} name="address" onChange={handleInputChange} type="email" placeholder={pAddress} />
          </Form.Group>

          <Button variant="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default UserProfile;
