import {React, useState, useEffect} from "react";
import "./style.css";
import GalleryTile from "../../components/GalleryTile";
import {Container, Form, Row } from "react-bootstrap";
import API from "../../utils/api"
import IconTags from "../../components/IconTags";



function Home() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


  const searchItems = (searchValue) =>{
    setSearchInput(searchValue)
    const filteredArr = []
    userData.forEach(user=> {
      const res = user.company.tags.filter(str => {
        str.includes(searchValue)})
        if(res.length === 0){
          filteredArr.push(user)
        }
    })
    console.log(filteredArr)
    setUserData(filteredArr)
  }

  // Get user dara and set data for use
  useEffect(() => {
    API.getAllData()
      .then((res) => {
        console.log(res);
        setUserData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
      <Container fluid>
        <div id="homeFilterDiv">
          <div id="homeFilterTitle">FIND YOUR LOCAL CHEFS</div>
          <Form id="homeFilterBar">
            <Form.Group controlId="formGridAddress1">
              <Form.Label id="mainBarTag">
                Search Cuisine, Location, or Chef
              </Form.Label>

              <Form.Control
                placeholder="1234 Main St"
                onChange={(e) => searchItems(e.target.value)}
              />
            </Form.Group>
          </Form>
          <div>TAG</div>
        </div>
      </Container>
    </div>
        <IconTags 
        userData={userData}
        />
      <Container fluid className="allStoreCards" id="homeStoreView">
        {/* {userData.map((user) => (
          <GalleryTile
          key={user._id}
          tags={user.company.tags}
          username={user.username}
          companyUserImg={user.img}
          companyName={user.username}
          userRatings={user.company.ratings}
          companyMenu={user.company.menu}
          companyfollowers={user.followers}
          ></GalleryTile>
          ))} */}
      </Container>
    </div>
  );
}

export default Home;
