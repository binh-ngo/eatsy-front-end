import React from 'react';
import './style.css';
import {Row, Col, Container} from 'react-bootstrap'

function Hero(props) {
  return (
    <Container className="hero">
      <Row>
      <Col sm="12">
        {/* <img className="heroImg" 
              // src={props.heroImg} 
              // alt={props.heroImg.alt}
              /> */}
        {/* <img className="userImg" 
              src={props.userImg} 
              alt={props.userImg.alt}
              /> */}
      </Col>
      <Col sm="12">
        <h1>{props.name}</h1>
        <ul className='descriptors'>
          <li>{props.address}</li>
          <li>Phone: {props.phoneNumber}</li>
          <li>Rating: {props.ratings}</li>
        <div className='tagArr'>
          <li>{props.tags+' '}</li>
        </div>
          {/* <p>{props.distance}</p> */}
        </ul>
      </Col>
      </Row>
    </Container>
  )
}

export default Hero