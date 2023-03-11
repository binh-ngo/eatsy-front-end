import React from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import MiniItemCards from "../MiniItemCards";

function GalleryTile(props) {
  const menuItems = [];
  function createMenuCards() {
    for (var i = 0; i < 4; i++) {
      menuItems.push([
        <MiniItemCards
        key={props.id}
        link={`http://localhost:3000/users/${props.username}`}
          name={props.companyMenu[i].name}
          img={props.companyMenu[i].img}
          description={props.companyMenu[i].description}
        ></MiniItemCards>,
      ]);
    }
    return menuItems;
  }
  return (

    <Container fluid className="galleryTileCon">

      <Card className="mainGalleryCard">
      <Container fluid className="galleryTileInfoCon">
      <a id="imgLink" href={`http://localhost:3000/users/${props.username}`} ><img className="galleryUserImg" src={props.companyUserImg}></img></a>
      <div id="chefInfoDiv">
        <a id="cardLink" href={`http://localhost:3000/users/${props.username}`} > <p className="chefName">{props.companyName}</p> </a>
        <div id="gallerTagBox">
        <p id="galleryTags">{props.tags[0]}|{props.userRatings}/5</p>
        </div>
      </div>
      </Container>
        {createMenuCards()}
        </Card>
    </Container>
  );
}

export default GalleryTile;
