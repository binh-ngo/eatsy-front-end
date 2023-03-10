import React from "react";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "./assets/heroImg.jpg";
import userImg from "./assets/userImg.jpg";
import taco from "./assets/taco.jpg";
import ItemCards from "../../components/ItemCards/index";
import StoreFrontDivider from "../../components/StoreFrontDivider/index";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import API from "../../utils/api"

function Stores() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([])
  const [menuData, setMenuData] = useState([])
  const [imgData, setImgData] = useState([])

  useEffect(() => {
    API.getAllData().then(res => {
      setUserData(res[0])
      setCompanyData(res[0].company)
      setMenuData(res[0].company.menu)
      // setImgData(res[0].company.menu[0].img.image.data.data)

      const imgDataArr = []
      let count = 0

      res[0].company.menu.map(item => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(item.img.image.data.data))
        )
        // console.log(item.name)
        const obj = { src: `${base64String}` }
        imgDataArr.push({
          ...res[0].company.menu[count],
          ...obj
        })
        count++
        setImgData(imgDataArr)
      })

    })
      .catch(err => console.log(err))
  }, [])

  // hard coded data
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

  return (
    <Container className="stores">

      <Row>
        <Hero
          // TODO remove rating, and phoneNumber here and in the hero itself
          name={userData.username}
          ratings={storeObj.ratings}
          address={userData.address}
          phoneNumber={storeObj.phoneNumber}
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
          {imgData.map((item) => (
            // TODO remove ingredients, ADD allergens to db
            <ItemCards
              key={item.id}
              name={item.name}
              ingredients={item.ingredients}
              // allergens={[item.allergens]}
              description={item.description}
              img={item.src}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Stores;
