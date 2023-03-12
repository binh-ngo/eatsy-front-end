import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'
import placeholder from "../../utils/assests/placeholder.png"

export default function MiniItemCards(props) {
  return (
    <Card key={props.id} id="miniItemCard" className="card col-5">
      <div id="miniImgContainer">
        <a href={props.link}>
          <Card.Img id="miniCardImg" src={props.src || placeholder} alt={props.alt}></Card.Img>
        </a>
      </div>
      
      <div id="miniItemInfoDiv">
        <Card.Title id="miniItemTitle">{props.name}</Card.Title>
        <Card.Body className="miniItemText">{props.description}</Card.Body>
        {/* TODO: add Tags to Database and make clickable box for each tag */}
      </div>
    </Card>
  );
}

