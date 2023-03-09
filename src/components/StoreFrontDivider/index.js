import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import './style.css'

function StoreFrontDivider(props) {
    const tagArr = props.tags
  return (
    <Container className="storeFrontDivider">
      <Row className="divider">
        <Col>
          <Dropdown sm="10">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
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
          <Button variant="danger">Contact</Button>{" "}
        </Col>
        <Col sm="1">
          <Button variant="success">Edit</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default StoreFrontDivider;
