import React from "react";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "./assets/heroImg.jpg";
import userImg from "./assets/userImg.jpg";
import taco from "./assets/taco.jpg";
import ItemCards from "../../components/ItemCards/index";
import StoreFrontDivider from "../../components/StoreFrontDivider/index";
import { Container, Row, Button } from "react-bootstrap";
import MessageModal from "../../components/MessageModal";

function Stores() {
  const cardArray = [
    {
      name: "taco",
      id: "223",
      allergens: ["Fish", "Dairy"],
      ingredients: "Beer Battered Cod, Corn, Tortilla, Cabbage, Raddish, lime",
      description: "Fish Taco with all the fixins",
      img: taco,
    },
    {
      name: "taco",
      id: "224",
      allergens: ["Fish", "Dairy"],
      ingredients: "Beer Battered Cod, Corn, Tortilla, Cabbage, Raddish, lime",
      description: "Fish Taco with all the fixins",
      img: taco,
    },
  ];

  const storeObj =
  {
    name: "Mcdonalds",
    phoneNumber: "8888888",
    email: "mcdonalds@email.com",
    address: "123 Mcdonalds St",
    tags: ["vegan", "spicy", "asian"],
    ratings: ["5"],
    heroImg:
    {
      src: heroImg,
      alt: "hero img",
    }
    ,
    userImg:
    {
      src: userImg,
      alt: 'user img'
    }
  }

  const handleContact = () => {
    console.log("hi lukas")
  }

  return (
    <Container className="stores">

      <Row>
        <Hero
          name={storeObj.name}
          ratings={storeObj.ratings}
          address={storeObj.address}
          phoneNumber={storeObj.phoneNumber}
          tags={[storeObj.tags]}
          heroImg={storeObj.heroImg.src}
          heroImgAlt={storeObj.heroImg.alt}
          userImg={storeObj.userImg.src}
          userImgAlt={storeObj.userImg.alt}
        />
      </Row>
      <MessageModal />
      <Row className='divider'>
        <StoreFrontDivider
        />
      </Row>
      {/* Brams Bottom ;) */}
      <Container id="itemCardsContainer">
        <Row id="bottomCardHalf">
          {cardArray.map((item) => (
            <ItemCards
              key={item.id}
              name={item.name}
              ingredients={item.ingredients}
              allergens={[item.allergens]}
              description={item.description}
              img={item.img}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Stores;
