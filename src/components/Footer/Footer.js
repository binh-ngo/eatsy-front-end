import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col sm="2"  lg="2" className="footer-copywright justify-content-center">
            <h3>Designed and Developed by </h3>
                </Col>
                <Col sm="8" lg="8">
                <ul className='justify-content-center'>
                <li><a href="https://www.linkedin.com/in/binh-nguyen-ngo/"> Binh-Nguyen Ngo</a></li>
                <li><a href="https://www.linkedin.com/in/lukas-macmillen-03b2681b2/">Lukas MacMillen</a></li>
                <li><a href="https://www.linkedin.com/in/binh-nguyen-ngo/">Bram Gibson</a></li>
                <li><a href="https://www.linkedin.com/in/binh-nguyen-ngo/">Jason Nguyen</a></li>
                </ul>
          </Col>
          <Col sm="2" lg="2" className="footer-copywright ">
            <h3>Copyright © {year}</h3>
          </Col>
        </Row>
      </Container>
    );
}

export default Footer