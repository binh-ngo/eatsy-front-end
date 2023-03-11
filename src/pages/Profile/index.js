import { React, useState, useEffect } from "react";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "../Stores/assets/heroImg.jpg";
import userImg from "../Stores/assets/userImg.jpg";
import UserProfile from "../../components/UserProfile";
import { Container, Col, Row, Button } from "react-bootstrap";
import taco from "../Stores/assets/taco.jpg";
import ItemCards from "../../components/ItemCards/index";
import EditCards from "../../components/EditCards";
import API from "../../utils/api"
import MessageModal from "../../components/ViewMessageModal";

function Profile() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([])
  const [menuData, setMenuData] = useState([])
  const [imgData, setImgData] = useState([])

  useEffect(() => {
    API.getAllData().then(res => {
      console.log(res[0])
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
        const obj = {src:`${base64String}`}
        imgDataArr.push({
          ...res[0].company.menu[count],
          ...obj})
          count ++
        setImgData(imgDataArr)
      })

    })
    .catch(err => console.log(err))
  }, [])

  // HARD CODED
  const cardArray = [
    {
      name: "taco",
      id: "223",
      allergens: ["Fish", "Dairy"],
      description: "Fish Taco with all the fixins",
      img: taco,
    },
    {
      name: "taco",
      id: "224",
      allergens: ["Fish", "Dairy"],
      description: "Fish Taco with all the fixins",
      img: taco,
    },
  ];

  const editCardObj = {
    name: "taco",
    id: "224",
    allergens: ["Fish", "Dairy"],
    description: "Fish Taco with all the fixins",
    img: taco,
  }
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

  const [buttonText, setButtonText] = useState("View Company Profile");
  const [variant, setVariant] = useState("danger");
  const [highlightState, setHighlightState] = useState("contentHidden");
  const [profileState, setProfileState] = useState("contentVisible");

  function switchButton() {
    if (buttonText === "View Company Profile") {
      setButtonText("View User Profile");
      setVariant("primary");
      setProfileState("contentHidden");
      setHighlightState("contentVisible");
    } else {
      setButtonText("View Company Profile");
      setVariant("danger");
      setProfileState("contentVisible");
      setHighlightState("contentHidden");
    }
  }
  const [editMode, setEditMode] = useState("editDisabled");

  function editHighlights() {
    if (editMode === "editDisabled") {
      setEditMode("editEnabled");
    } else if(editMode === "editEnabled") {
      setEditMode("editDisabled");
    }
  }
  
  return (
    <div className="profile">
      <Container>
      <div id="testDiv">
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
      <div id="profileBtnDiv">
        <MessageModal />
        <Button
          onClick={switchButton}
          className="companyProfileBtn"
          variant={variant}
        >
          {buttonText}
        </Button>{" "}
      </div>
    </div>
        <div className="userProfileComponent" id={profileState}>
          {/* TODO make user profile edit functionality */}
          <UserProfile
            name={userData.username}
            email={userData.email}
            address={userData.address}
          />
        </div>
        <div className="highlightCreationComponent" id={highlightState}>
          <Row className="highlightCreationUnderline">
            <Col sm="11"></Col>
            <Col sm="1">
              <Button
                onClick={editHighlights}
                className="highlightCreationEditButton"
                variant="success"
              >
                Edit
              </Button>{" "}
            </Col>
          </Row>
          <div className="editMenu">
            <EditCards 
                  key={editCardObj.id}
                  name={editCardObj.name}
                  allergens={[editCardObj.allergens]}
                  description={editCardObj.description}
                  img={editCardObj.img}
            />
          </div>
          <div id="itemCardsContainer">
            <div id="bottomCardHalf" className="row">
              {cardArray.map((item) => (
                <ItemCards
                  key={item.id}
                  name={item.name}
                  allergens={[item.allergens]}
                  description={item.description}
                  img={item.img}
                  className={editMode}
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
