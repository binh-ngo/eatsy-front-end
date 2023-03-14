import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import "./style.css";
import Hero from "../../components/Hero/index";
import heroImg from "../Stores/assets/heroImg.jpg";
import userImg from "../Stores/assets/userImg.jpg";
import UserProfile from "../../components/UserProfile";
import { Container, Col, Row, Button, Card, Modal, Form } from "react-bootstrap";
import ItemCards from "../../components/ItemCards/index";
import EditCards from "../../components/EditCards";
import API from "../../utils/api"
import MessageModal from "../../components/ViewMessageModal";


function Profile() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [imgData, setImgData] = useState([]);

  // Get user data and set data for use
  useEffect(() => {
    const getUser = async () => {
      try {
        // check if user has token in local storage
        const savedToken = localStorage.getItem("token");

        if (savedToken) {
          // get the token data from the api && check if the token is still valid
          const response = await API.isValidToken(savedToken);
          if (response.isValid) {
            // use the token data to fetch appropriate user profile
            const data = await API.getSingleUser(response.user.username);
            console.log(data)
            setUserData(data);
            setCompanyData(data.company);
            setMenuData(data.company.menu);
            // localStorage.setItem("user", JSON.stringify(data))
          } else {
            localStorage.removeItem("token")
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

    getUser();
  }, []);

  // HARD CODED
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
      setVariant("light");
      setProfileState("contentHidden");
      setHighlightState("contentVisible");
    } else {
      setButtonText("View Company Profile");
      setVariant("light");
      setProfileState("contentVisible");
      setHighlightState("contentHidden");
    }
  }

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

  // open and close the edit card modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // show modal also adds an event listener for when a user decides to upload and image for new items
  const handleShow = async () => {
    await setShow(true);

    const fileInput = await document.getElementById("fileInput")

    fileInput.addEventListener("change", e => {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });

      reader.readAsDataURL(file);
    })
  }

  const createNewItem = async () => {
    // const localUser = JSON.parse(localStorage.getItem("user"))
    // TODO make itemObj pull from the inputs
    const itemObj = {
      companyId: companyData._id,
      name: "TEST",
      description: "testing image upload",
      src: imgData
    };
    console.log(itemObj)
    await API.createItem(itemObj);

    window.location.reload();
  }

  return (
    <div className="profile">
      <Container>
        <Row>
          <Hero
            name={userData.username}
            tags={companyData.tags}
            userImg={storeObj.userImg.src}
            userImgAlt={storeObj.userImg.alt}
          />
        </Row>
<<<<<<< HEAD
        {/* TODO move the buttons into the hero? */}
        <div id="profileBtnDiv">
          <MessageModal userData={userData} />
          <Button
            onClick={switchButton}
            className="companyProfileBtn"
            variant={variant}
=======
        <div id="profileBtnDiv">
          <MessageModal userData={userData} className="btn-style-primary" />
          <Button
            onClick={switchButton}
            className="companyProfileBtn btn-style-primary lato"
>>>>>>> dev
          >
            {buttonText}
          </Button>{" "}
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
                className="highlightCreationEditButton btn-style-secondary lato"

              >
                {editBtnText}
              </Button>{" "}
            </Col>
          </Row>
          <div id="itemCardsContainer">
            <Row className={editCard} id="bottomCardHalf">
              {menuData?.length
                ? (
                  menuData.map(item => (
                    <ItemCards
                      key={item.id}
                      name={item.name}
                      allergens={[item.allergens]}
                      description={item.description}
                      src={item.src}
                    />
                  ))
                ) : <p>No menu to display</p>
              }
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
                        controlId=""
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
                        controlId="newItemDescription"
                      >
                        <Form.Label>Dish Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="fileInput"
                      >
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
<<<<<<< HEAD
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={createNewItem}>
=======
                    <Button className="btn-style-primary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button className="btn-style-secondary" onClick={createNewItem}>
>>>>>>> dev
                      Add Item
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Row>
          </div>
          <div id="itemCardsContainer">
            <Row className={itemCard} id="bottomCardHalf">
              {menuData?.length
                ? (
                  menuData.map(item => (
                    <ItemCards
                      key={item.id}
                      name={item.name}
                      allergens={[item.allergens]}
                      description={item.description}
                      src={item.src}
                    />
                  ))
                ) : <p>No menu to display</p>
              }
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
