import { React, useState, useEffect } from "react";
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "../Stores/assets/heroImg.jpg";
import userImg from "../Stores/assets/userImg.jpg";
import UserProfile from "../../components/UserProfile";
import { Container, Col, Row, Button, Card, Modal, Form } from "react-bootstrap";
import taco from "../Stores/assets/taco.jpg";
import ItemCards from "../../components/ItemCards/index";
import EditCards from "../../components/EditCards";
<<<<<<< HEAD
import API from "../../utils/api"
import MessageModal from "../../components/ViewMessageModal";
=======
import API from "../../utils/api";
import MessageModal from "../../components/MessageModal";
>>>>>>> dev

function Profile() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    API.getAllData()
      .then((res) => {
        console.log(res[0]);
        setUserData(res[0]);
        setCompanyData(res[0].company);
        setMenuData(res[0].company.menu);
        // setImgData(res[0].company.menu[0].img.image.data.data)

        const imgDataArr = [];
        let count = 0;

        res[0].company.menu.map((item) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(item.img.image.data.data))
          );
          // console.log(item.name)
          const obj = { src: `${base64String}` };
          imgDataArr.push({
            ...res[0].company.menu[count],
            ...obj,
          });
          count++;
          setImgData(imgDataArr);
        });
      })
      .catch((err) => console.log(err));
  }, []);

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
  };
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
  // swaps between user profile and company highlights
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
  //
  const [editCard, setEditCard] = useState("contentHidden");
  const [itemCard, setItemCard] = useState("contentVisible");
  const [editBtnText, setEditBtnText] = useState("Edit Menu");

  function editHighlights() {
    if (editCard === "contentHidden") {
      setEditCard("contentVisible");
      setItemCard("contentHidden");
      setEditBtnText("Discard Changes");
    } else if (editCard === "contentVisible") {
      setEditCard("contentHidden");
      setItemCard("ContentVisible");
      setEditBtnText("Edit Menu");
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
<<<<<<< HEAD
      </div>
    </div>
=======
        {/* edit position of contact button in Stores/style.css */}
        <MessageModal />
>>>>>>> dev
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
                {editBtnText}
              </Button>{" "}
            </Col>
          </Row>
          <div id="itemCardsContainer">
            <Row className={editCard} id="bottomCardHalf">
              {cardArray.map((item) => (
                <EditCards
                key={item.id}
                name={item.name}
                  allergens={[item.allergens]}
                  description={item.description}
                  img={item.img}
                  />
                  ))}
                <>
              <Col sm="6">
                  <Button className="addDishBtn" onClick={handleShow} variant="light">
                    <Card id="addDishCard" className="card col-5">
                      <Card.Title id="addDishText">Add Dish</Card.Title>
                      <Card.Text id="addDishPlus">+</Card.Text>
                    </Card>
                  </Button>
              </Col>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Dish</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Dish Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Spaghetti and Meatballs"
                            autoFocus
                          />
                          <Form.Label>Allergens</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Soy, Peanuts, Gluten..."
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Dish Description</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
                  </Row>
                </div>
          <div id="itemCardsContainer">
            <Row className={itemCard} id="bottomCardHalf">
              {cardArray.map((item) => (
                <ItemCards
                  key={item.id}
                  name={item.name}
                  allergens={[item.allergens]}
                  description={item.description}
                  img={item.img}
                />
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
