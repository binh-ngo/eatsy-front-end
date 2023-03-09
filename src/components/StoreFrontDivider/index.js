import React from "react";
import { Container, Row, Button, Col} from "react-bootstrap";
import './style.css'

function StoreFrontDivider() {
  return (
    <Container className="storeFrontDivider">
      <Row className="divider">
        <Col sm="1">
        <Button variant="danger">Contact</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default StoreFrontDivider;
