import React from "react";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "../Stores/assets/heroImg.jpg";
import userImg from "../Stores/assets/userImg.jpg";
import UserProfile from "../../components/UserProfile";
import {Container, Row, Button} from 'react-bootstrap'
import HighlightCreation from "../../components/HighlightCreation";
import taco from "../Stores/assets/taco.jpg";
import ItemCards from "../../components/ItemCards/index";

function Profile() {
  const cardArray = [
    {
      name: "taco",
      id:"223",
      allergens: ["Fish", "Dairy"],
      description: "Fish Taco with all the fixins",
      img: taco,
    },
    {
      name: "taco",
      id:"224",
      allergens: ["Fish", "Dairy"],
      description: "Fish Taco with all the fixins",
      img: taco,
    },
  ];

  const storeObj = {
    name: "Mcdonalds",
    phoneNumber: "8888888",
    email: "mcdonalds@email.com",
    address: "123 Mcdonalds St",
    tags: ["vegan", "spicy", "asian"],
    ratings: ["5"],
    heroImg: {
      src: heroImg,
      alt: "hero img",
    },
    userImg: {
      src: userImg,
      alt: "user img",
    },
  };

  return (
    <div className="profile">
      <Container>
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
        {/* TODO: On click, changes own name to User Profile with a variant of Primary */}
              {/* And changes userProfileComponent to display:none while changing highlightCreationComponent to display visible */}
      <Button className="companyProfileBtn" variant="danger">Company Profile</Button>{' '}
      <div className="userProfileComponent">
        <UserProfile
          name={storeObj.name}
          email={storeObj.email}
          address={storeObj.address}
          />
      </div>
      <div className="highlightCreationComponent">
        <HighlightCreation 
          tags={storeObj.tags}/>
              <div id="itemCardsContainer">
      <div id="bottomCardHalf" className="row">
        {cardArray.map((item) => (
          <ItemCards
          key={item.id}
            name={item.name}
            allergens={[item.allergens]}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
      </div>
          </Container>
    </div>
  );
}

export default Profile;
