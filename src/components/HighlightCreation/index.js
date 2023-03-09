import React from 'react'
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import './style.css'

function HighlightCreation(props) {
    const tagArr = props.tags
  return (
    <Container className="highlightCreation">
    <Row className="highlightCreationUnderline">
      <Col sm="11">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
              {/* Filter by Tag */}
              {tagArr.map(tag => {
                  return <Dropdown.Item as="button">{tag}</Dropdown.Item>                   
              })}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col sm="1">
        <Button variant="success">Edit</Button>{" "}
      </Col>
    </Row>
  </Container>
)
}

export default HighlightCreation
