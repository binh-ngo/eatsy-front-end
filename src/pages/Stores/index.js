import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import ItemCards from "../../components/ItemCards/index";
import StoreFrontDivider from "../../components/StoreFrontDivider/index";
import { Container, Row, Button } from "react-bootstrap";
import SendMessageModal from "../../components/SendMessageModal";
import { useState, useEffect } from "react";
import API from "../../utils/api"
import demoGuy from "../../utils/assests/eatsy.png"
import eatsy from "../../utils/assests/hero.png"

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

        return (
                <section id="profileContainer" className="wrapper">
                        <section id="heroContainer">
                                <img src={eatsy} id="eatsyHero"></img>
                                <img src={userData.src || demoGuy} id="userImg"></img>
                                <div id="heroText">
                                        <h1 id="heroName">Meet: {userData.username}</h1>
                                        <p id="heroDescription">{companyData.description}</p>
                                        <ul id="heroTags">
                                        <li><u>TAGS</u></li>
                                                                {companyData.tags?.length
                                                                ?(companyData.tags.map(tag => (
                                                                        <li>{tag}</li>
                                                                ))): <li>N/A</li>
                                                        }
                                        </ul>
                                </div>
                                <section id="profileBtns">
                                        <SendMessageModal
                                                userTo={params.username}
                                                userFrom={localStorage.getItem("username")}
                                                name="Send Message"
                                        />
                                </section>
                        </section>
                        <StoreFrontDivider/>
                        <section>
                                <Container id="itemCardsContainer">
                                        <Row id="bottomCardHalf">
                                                {menuData?.length
                                                        ? (
                                                                menuData.map(item => (
                                                                        <ItemCards
                                                                                id={item._id}
                                                                                name={item.name}
                                                                                allergens={[item.allergens]}
                                                                                description={item.description}
                                                                                src={item.src}
                                                                        />
                                                                ))
                                                        ) : <p>No menu to display</p>
                                                }
                                        </Row>
                                </Container>
                        </section>
                </section>
        );
};

export default Stores;
