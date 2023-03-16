import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import "./style.css";
import UserProfile from "../../components/UserProfile";
import { Container, Col, Row, Button, Card, Modal, Form } from "react-bootstrap";
import ItemCards from "../../components/ItemCards/index";
import EditCards from "../../components/EditCards";
import API from "../../utils/api"
import MessageModal from "../../components/ViewMessageModal";
import eatsy from "../../utils/assests/hero.png"
import demoGuy from "../../utils/assests/eatsy.png"

function Profile() {
        // fetch data
        const [userData, setUserData] = useState([]);
        const [companyData, setCompanyData] = useState([]);
        const [menuData, setMenuData] = useState([]);
        const [imgData, setImgData] = useState("");
        const [isBusy, setBusy] = useState(true)
        const [heroTags, setHeroTags] = useState([])
        const [heroDescription, setHeroDescription] = useState([])
        const [tagLi, setTagLi] = useState([])

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
                                                setBusy(false);
                                                setHeroTags(data.company.tags)
                                                setHeroDescription(data.company.description)
                                                if (data.company.tags) {
                                                        console.log(data.company.tags)
                                                        setTagLi(createTags(data.company.tags))
                                                }
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

        useEffect(() => {
                setTagLi(createTags(heroTags));
        }, [heroTags])

        function createTags(heroTags) {
                return(
                <ul id="heroTags">
                        <li><u>TAGS</u></li>
                        {heroTags?.length
                                ? (heroTags.map((tag,i) => (
                                        <li key={i}>{tag}</li>
                                ))) : <li>N/A</li>
                        }
                </ul>
                )
        }

        // swaps between user profile and company highlights
        const [buttonText, setButtonText] = useState("View Menu");
        const [variant, setVariant] = useState("danger");
        const [highlightState, setHighlightState] = useState("contentHidden");
        const [profileState, setProfileState] = useState("contentVisible");

        function switchButton() {
                if (buttonText === "View Menu") {
                        setButtonText("View User Profile");
                        setVariant("primary");
                        setProfileState("contentHidden");
                        setHighlightState("contentVisible");
                } else {
                        setButtonText("View Menu");
                        setVariant("danger");
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
        const [showPro, setShowPro] = useState(false);

        const handleClose = () => setShow(false);
        const handleClosePro = () => setShowPro(false);

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
        const handleShowPro = async () => {
                await setShowPro(true);

                const fileInput = await document.getElementById("fileInputPro")

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
                const itemObj = {
                        companyId: companyData._id,
                        name: document.querySelector("#newItemName").value,
                        description: document.querySelector("#newItemDescription").value,
                        allergens: document.querySelector("#newItemAllergens").value,
                        src: imgData
                };
                console.log(itemObj)
                await API.createItem(itemObj);

                window.location.reload();
        }

        const uploadProfilePicture = async () => {
                const userObj = {
                        src: imgData
                };
                await API.updateUser(localStorage.getItem("username"), userObj);

                window.location.reload();
        }

        function showText() {
                document.querySelector("#profilePictureText").setAttribute("style", "visibility: visibile;")
        }

        function hideText() {
                document.querySelector("#profilePictureText").setAttribute("style", "visibility: hidden;")
        }

        setTimeout(() => {
                hideText()
        }, "1000");

        return (
                <section id="profileContainer" className="wrapper">
                        {isBusy ? (
                                <></>
                        ) : (
                                <>
                                        <section id="heroContainer">
                                                <img src={eatsy} id="eatsyHero"></img>
                                                <img src={userData.src || demoGuy} id="userImg"></img>
                                                <a onMouseOver={showText} onMouseOut={hideText} onClick={handleShowPro} id='addProfilePicture'><span id="marginUp">+</span></a>
                                                <p id="profilePictureText" className="bowlby" onLoad={hideText}>ADD PROFILE PICTURE</p>
                                                <div id="heroText">
                                                        <h1 id="heroName">{userData.username}</h1>
                                                        <p id="heroDescription">{heroDescription}</p>
                                                        {tagLi}
                                                </div>
                                                <section id="profileBtns">
                                                        <MessageModal userData={userData} />
                                                        <Button
                                                                onClick={switchButton}
                                                                className="companyProfileBtn btn-style-primary lato"
                                                                variant={variant}
                                                        >
                                                                {buttonText}
                                                        </Button>{" "}
                                                </section>
                                        </section>
                                        <div className="userProfileComponent" id={profileState}>
                                                {/* TODO make user profile edit functionality */}
                                                <UserProfile
                                                        companyId={companyData._id}
                                                        name={userData.username}
                                                        tags={companyData.tags}
                                                        email={userData.email}
                                                        address={userData.address}
                                                        description={companyData.description}
                                                        setHeroTags={setHeroTags}
                                                        setHeroDescription={setHeroDescription}
                                                />
                                        </div>
                                        <Container>
                                                <div className="highlightCreationComponent" id={highlightState}>
                                                        <Row className="highlightCreationUnderline">
                                                                <Col sm="11"></Col>
                                                                <Col sm="1">
                                                                        <Button
                                                                                onClick={editHighlights}
                                                                                className="highlightCreationEditButton btn-style-secondary lato"
                                                                        // variant="success"
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
                                                                                                <EditCards
                                                                                                        id={item._id}
                                                                                                        key={item._id}
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
                                                                                                                        id="newItemName"
                                                                                                                />
                                                                                                                <Form.Label>Allergens</Form.Label>
                                                                                                                <Form.Control
                                                                                                                        type="text"
                                                                                                                        placeholder="Soy, Peanuts, Gluten..."
                                                                                                                        autoFocus
                                                                                                                        id="newItemAllergens"
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
                                                                                                <Button className="btn-style-primary" onClick={handleClose}>
                                                                                                        Close
                                                                                                </Button>
                                                                                                <Button className="btn-style-seconday" onClick={createNewItem}>
                                                                                                        Add Item
                                                                                                </Button>
                                                                                        </Modal.Footer>
                                                                                </Modal>
                                                                        </>
                                                                        <Modal show={showPro} onHide={handleClosePro}>
                                                                                <Modal.Header closeButton>
                                                                                        <Modal.Title>Add Profile Picture</Modal.Title>
                                                                                </Modal.Header>
                                                                                <Modal.Body>
                                                                                        <Form>
                                                                                                <Form.Group
                                                                                                        className="mb-3"
                                                                                                        controlId="fileInputPro"
                                                                                                >
                                                                                                        <Form.Label>Upload Image</Form.Label>
                                                                                                        <Form.Control type="file" rows={3} />
                                                                                                </Form.Group>
                                                                                        </Form>
                                                                                </Modal.Body>
                                                                                <Modal.Footer>
                                                                                        <Button className="btn-style-primary" onClick={handleClosePro}>
                                                                                                Close
                                                                                        </Button>
                                                                                        <Button className="btn-style-seconday" onClick={uploadProfilePicture}>
                                                                                                Add Picture
                                                                                        </Button>
                                                                                </Modal.Footer>
                                                                        </Modal>
                                                                </Row>
                                                        </div>
                                                        <div id="itemCardsContainer">
                                                                <Row className={itemCard} id="bottomCardHalf">
                                                                        {menuData?.length
                                                                                ? (
                                                                                        menuData.map((item) => (
                                                                                                <ItemCards
                                                                                                        id={item._id}
                                                                                                        key={item._id}
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
                                </>
                        )}
                </section>
        );
}

export default Profile;
