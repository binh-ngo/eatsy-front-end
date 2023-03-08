import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col>
                <ul className='justify-content-space-around'>
                <li>Designed and Developed by </li>
                <li><a href="https://www.linkedin.com/in/binh-nguyen-ngo/"> Binh-Nguyen Ngo</a></li>
                <li><a href="https://www.linkedin.com/in/lukas-macmillen-03b2681b2/">Lukas MacMillen</a></li>
                <li><a href="https://www.linkedin.com/in/bram-g/">Bram Gibson</a></li>
                <li><a href="https://www.linkedin.com/in/jhnwoo">Jason Nguyen</a></li>
                <li>Copyright © {year}</li>
                </ul>
          </Col>
        </Row>
      </Container>
    );
}

export default Footer