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
import eatsy from "../../utils/assests/hero.png"
import demoGuy from "../../utils/assests/eatsy.png"

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
                <section id="profileContainer">
                        <section id="heroContainer">
                                <img src={eatsy} id="eatsyHero"></img>
                                <img src={demoGuy} id="userImg"></img>
                                <div id="heroText">
                                        <h1 id="heroName">Meet: {userData.username}</h1>
                                        <p id="heroDescription">{companyData.description}</p>
                                        <ul id="heroTags">
                                                <li>American</li>
                                                <li>Japanese</li>
                                                <li>Spicy</li>
                                        </ul>
                                </div>
                        </section>
                </section>
        );
}

export default Profile;
