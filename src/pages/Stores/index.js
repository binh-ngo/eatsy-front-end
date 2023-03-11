import React from "react";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "./assets/heroImg.jpg";
import userImg from "./assets/userImg.jpg";
import taco from "./assets/taco.jpg";
import ItemCards from "../../components/ItemCards/index";
import StoreFrontDivider from "../../components/StoreFrontDivider/index";
import { Container, Row, Button } from "react-bootstrap";
import MessageModal from "../../components/ViewMessageModal";
import { useState, useEffect } from "react";
import API from "../../utils/api"

function Stores() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([])
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    API.getAllData().then(res => {
      setUserData(res[0])
      setCompanyData(res[0].company)
      setMenuData(res[0].company.menu)
    })
      .catch(err => console.log(err))
  }, [])

  // hard coded data
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

  return (
    <Container className="stores">

      <Row>
        <Hero
          // TODO remove rating, and phoneNumber here and in the hero itself
          name={userData.username}
          tags={companyData.tags}
          heroImg={storeObj.heroImg.src}
          heroImgAlt={storeObj.heroImg.alt}
          userImg={storeObj.userImg.src}
          userImgAlt={storeObj.userImg.alt}
        />
      </Row>
      <Row className='divider'>
        <StoreFrontDivider
        />
      </Row>
      {/* Brams Bottom ;) */}
      <Container id="itemCardsContainer">
        <Row id="bottomCardHalf">
          {menuData.map((item) => (
            // TODO remove ingredients, ADD allergens to db
            <ItemCards
              key={item.id}
              name={item.name}
              allergens={[item.allergens]}
              description={item.description}
              src={item.src}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Stores;
