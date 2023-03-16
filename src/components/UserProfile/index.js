import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './style.css'
import API from "../../utils/api"

function UserProfile(props) {
  const [tags, setTags] = useState([])
  const [description, setDescription] = useState([])
  const [email, setEmail] = useState([])
  const [address, setAddress] = useState([])
  const [pTags, setPTags] = useState([])
  const [pDescription, setPDescription] = useState([])
  const [pEmail, setPEmail] = useState([])
  const [pAddress, setPAddress] = useState([])

  useEffect(() => {
    setPTags(props.tags)
    setPDescription(props.description)
    setPEmail(props.email)
    setPAddress(props.address)
  }, [])

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'tags') {
      setTags(inputValue);
    } else if (inputType === "address") {
      setAddress(inputValue);
    } else if (inputType === "description") {
      setDescription(inputValue);
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
      tags: document.querySelector("#formBasicTags").value.split(",").map(tag => tag.trim()) || pTags,
      description: document.querySelector("#formBasicDescription").value || pDescription
    }

    await API.updateUser(props.name, userInfoObj);
    await API.updateCompany(props.companyId, userInfoObj);

    setPTags(userInfoObj.tags)
    props.setHeroTags(userInfoObj.tags)
    setPDescription(userInfoObj.description)
    props.setHeroDescription(userInfoObj.description)
    setPEmail(userInfoObj.email)
    setPAddress(userInfoObj.address)

    setTags("")
    setDescription("")
    setEmail("")
    setAddress("")
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

          <Form.Group className="mb-3 userInfoFormGoup" controlId="formBasicEmail">
            <Form.Label className="profile-label bowlby">EMAIL:</Form.Label>
            <Form.Control className="lato" value={email} name="email" onChange={handleInputChange} type="email" placeholder={pEmail} />
          </Form.Group>

          <Form.Group className="mb-3 userInfoFormGoup" controlId="formBasicAddress">
            <Form.Label className="profile-label bowlby">ADDRESS:</Form.Label>
            <Form.Control className="lato" value={address} name="address" onChange={handleInputChange} type="email" placeholder={pAddress} />
          </Form.Group>

          <Form.Group className="mb-3 userInfoFormGoup" controlId="formBasicTags">
            <Form.Label className="profile-label bowlby">TAGS:</Form.Label>
            <Form.Text className="text-muted" id="filterTagFormText">
              (Filterable Tags: American, Asian, Breakfast, Italian, Japanese, Mexican, Seafood, Vegan, Vegetarian).
            </Form.Text>
            <Form.Control className="lato" value={tags} name="tags" onChange={handleInputChange} type="tags" placeholder={pTags} />
          </Form.Group>

          <Form.Group className="mb-3 userInfoFormGoup" controlId="formBasicDescription">
            <Form.Label className="profile-label bowlby">DESCRIPTION:</Form.Label>
            <Form.Control className="lato" value={description} name="description" onChange={handleInputChange} type="description" placeholder={pDescription} />
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
