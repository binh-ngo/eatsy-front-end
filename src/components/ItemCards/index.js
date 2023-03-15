import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'
import placeholder from "../../utils/assests/placeholder.png"

export default function ItemCards(props) {
  return (
    <Card id="itemCard" className="card col-5" key={props.key}>
      <div id="imgContainer">
        <a href={props.link}>
        <Card.Img id="cardImg" src={props.src || placeholder} alt={props.alt}></Card.Img>
        </a>
      </div>
      
      <div id="itemInfoDiv">
        <Card.Title id="itemTitle">{props.name}</Card.Title>
        <Card.Body className="itemText">{props.description}</Card.Body>
        <Card.Body id="itemSubTitle">ALLERGENS</Card.Body>
        <Card.Body className="itemText">{props.allergens}</Card.Body>
        {/* TODO: add Tags to Database and make clickable box for each tag */}
      </div>
    </Card>
  );
}

