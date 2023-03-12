import React from "react";
import {useParams} from "react-router-dom";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "./assets/heroImg.jpg";
import userImg from "./assets/userImg.jpg";
import ItemCards from "../../components/ItemCards/index";
import StoreFrontDivider from "../../components/StoreFrontDivider/index";
import { Container, Row, Button } from "react-bootstrap";
import SendMessageModal from "../../components/SendMessageModal";
import { useState, useEffect } from "react";
import API from "../../utils/api"

function Stores() {
  // get username param
  const params = useParams();
  
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([])
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    API.getSingleUser(params.username).then(res => {
      setUserData(res)
      setCompanyData(res.company)
      setMenuData(res.company.menu)
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

      <Row id="storeHero">
        <Hero
          // TODO remove rating, and phoneNumber here and in the hero itself
          name={userData.username}
          tags={companyData.tags}
          heroImg={storeObj.heroImg.src}
          heroImgAlt={storeObj.heroImg.alt}
          userImg={storeObj.userImg.src}
          userImgAlt={storeObj.userImg.alt}
          />
          {/* TODO edit when JWT token is accessable */}
          <SendMessageModal 
          userTo = {params.username}
          userFrom = {"TEST USER"}
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
