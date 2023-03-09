import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import './style.css'

function HighlightCreation(props) {
  function editHighlights() {

  }

  return (
    <Container className="highlightCreation">
    <Row className="highlightCreationUnderline">
      <Col sm="11"></Col>
      <Col sm="1">
        <Button 
        onClick={editHighlights}
        className="highlightCreationEditButton"
        variant="success"
        >Edit</Button>{" "}
      </Col>
    </Row>
  </Container>
)
}

export default HighlightCreation
