import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './style.css'

function UserProfile(props) {
  return (
    <Container className="userProfile">
      <Row className="userProfileUnderline">
        <Col sm="11">
          <p>User Info</p>
        </Col>
        <Col sm="1">
          <Button variant="primary">Edit</Button>{" "}
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder={props.name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder={props.email} />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="email" placeholder={props.address} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default UserProfile;
