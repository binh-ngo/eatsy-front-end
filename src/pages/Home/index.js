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
  const [tagFilter, setTagFilter] = useState([]);

  // Get user dara and set data for use
  useEffect(() => {
    API.getAllData()
      .then((res) => {
        console.log(res)
        setCompanyData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
      <Container fluid>
        <div id="homeFilterDiv">
          <div id="homeFilterTitle">FIND LOCAL CHEFS</div>
          <div id="welcomeText">Here is where local chefs can showcase their <span id="welcomeTextBold"> CULTURE, CREATIVITY</span>and <span id="welcomeTextBold"> CRAFT! </span> </div>
          <div id="welcomeText">Looking to spice up your next event or party? Get in Touch with <span id="welcomeTextBold">EATSY!</span> </div>
          <div id="welcomeText"> Find a Chef with a menu that <span id="welcomeTextBold">WOWS</span>, and <span id="welcomeTextBold">CONNECT</span> on our platform!  </div>
        </div>
      </Container>
    </div>
        <IconTags 
        userData={userData}
        setTagFilter={setTagFilter}
        />
        <hr></hr>
      <Container fluid className="allStoreCards" id="homeStoreView">
        {companyData.map((user) => (
          user.company.menu?.length
          ?(localStorage?.getItem("filter")
            ?(user.company.tags?.includes(localStorage.getItem("filter"))
            ? (
              <GalleryTile
              key={user._id}
              // tags={user.company.tags}
              username={user.username}
              companyUserImg={user.img}
              companyName={user.username}
              // userRatings={user.company.ratings}
              companyMenu={user.company.menu}
              companyfollowers={user.followers}
              ></GalleryTile>
            ) : <></>
            ): <></>
          ):<></>
          ))}
      </Container>
    </div>
  );
}

export default Home;
