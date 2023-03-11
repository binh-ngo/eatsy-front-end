import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import './style.css'

function StoreFrontDivider() {
  return (
    <Container className="storeFrontDivider">
      <Row className="divider">
        <Col sm="1">
          <h2>Menu</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreFrontDivider;
