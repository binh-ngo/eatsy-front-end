import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card'

// export default function ItemCards(props) {
//   return (
//     <Card id="itemCard" className="card col-5">
//       <div id="imgContainer">
//         <a href={props.link}>
//           <Card.Img id="cardImg" src={props.img} alt={props.alt}></Card.Img>
//         </a>
//       </div>
//       <div id="itemInfoDiv">
//         <Card.Title id="itemTitle">{props.name}</Card.Title>
//         <Card.Body id="itemDesc">{props.description}</Card.Body>
//         <Card.Body id="itemAllergens">{props.allergens}</Card.Body>
//       </div>
//     </Card>
//   );
// }

export default function ItemCards(props) {
  return (
    <Card id="itemCard" className="card col-5">
      <div id="imgContainer">
        <a href={props.link}>
          <Card.Img id="cardImg" src={props.img} alt={props.alt}></Card.Img>
      <Card.ImgOverlay id="imgOverlayEffects">
        <Card.Title id="itemTitle">{props.name}</Card.Title>
        <Card.Body id="itemDesc">{props.description}</Card.Body>
        <Card.Body id="itemAllergens">{props.allergens}</Card.Body>
      </Card.ImgOverlay>

        </a>
      </div>

    </Card>
  );
}
