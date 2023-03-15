import { React, useState, useEffect } from "react";
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
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === "address") {
      setAddress(inputValue);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    editUserInfo();
  }

  async function editUserInfo() {
    const userInfoObj = {
      email: document.querySelector('#formBasicEmail').value || pEmail,
      address: document.querySelector('#formBasicAddress').value || pAddress,
    }
    await API.updateUser(pName, userInfoObj)

    window.location.reload()
  }

  return (
    <Container className="userProfile">
      <Row className="userProfileUnderline">
        <Col sm="12" className="title-text bowlby">
          <h3>USER INFO</h3>
        </Col>
      </Row>
      <Row>
        <Form controlId="userInfoForm">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="profile-label bowlby">EMAIL:</Form.Label>
            <Form.Control className="lato" value={email} name="email" onChange={handleInputChange} type="email" placeholder={pEmail} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label className="profile-label bowlby">ADDRESS:</Form.Label>
            <Form.Control className="lato" value={address} name="address" onChange={handleInputChange} type="email" placeholder={pAddress} />
          </Form.Group>

          <Button className="btn-style-secondary lato" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default UserProfile;
