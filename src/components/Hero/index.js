import React from 'react';
import './style.css';
import {Row, Col, Container} from 'react-bootstrap'
import eatsyHero from "../../utils/assests/eatsyhero.png"

function Hero(props) {
  return (
    <Container className="hero">
      <Row>
      <Col sm="12">
         <img className="heroImg" 
              src={eatsyHero} 
              alt= "eatsy hero"
              /> 
         <img className="userImg" 
              src={props.userImg} 
              alt={props.userImgAlt}
              /> 
      </Col>
      <Col sm="12" className="descriptors">
        <h1>{props.name}</h1>
        <ul>
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