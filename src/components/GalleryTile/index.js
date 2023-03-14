import {React, useState, useEffect} from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";
import MiniItemCards from "../MiniItemCards";

function GalleryTile(props) {
  // const menuItems = [];
  // async function createMenuCards() {
  //   const [menu, setMenu] = useState([])
  //   for (var i = 0; i < 4; i++) {
  //     await useEffect(() => {
  //       setMenu(props.companyMenu[i])
  //     })
  //     menuItems.push([
  //       <MiniItemCards
  //       key={props.id}
  //       link={`http://localhost:3000/users/${props.username}`}
  //         name={menu.name}
  //         src={menu.src}
  //         description={menu.description}
  //       ></MiniItemCards>,
  //     ]);
  //   }
  //   return menuItems;
  // }
  return (

    <Container fluid className="galleryTileCon">

      <Card className="mainGalleryCard">
      <Container fluid className="galleryTileInfoCon">
      <a id="imgLink" href={`https://eatsyfoods.netlify.app/users/${props.username}`} ><img className="galleryUserImg" src={props.companyUserImg}></img></a>
      <div id="chefInfoDiv">
        <a id="cardLink" href={`https://eatsyfoods.netlify.app/users/${props.username}`} > <p className="chefName">{props.companyName}</p> </a>
        <div id="gallerTagBox">
        <p id="galleryTags">{props.tags}</p>
        </div>
      </div>
      </Container>
        {props.companyMenu.map(item => {
          return <MiniItemCards
          key={props.id}
          link={`https://eatsyfoods.netlify.app/users/${props.username}`}
          name={item.name}
          src={item.src}
          description={item.description}
          />
        })}
        </Card>
    </Container>
  );
}

export default GalleryTile;
