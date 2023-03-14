import {React, useState, useEffect} from "react";
import "./style.css";
// import GalleryTile from "../../components/GalleryTile";
import {Container, Row } from "react-bootstrap";
// placeholder images
import SearchBar from "../../components/Search";
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
     <SearchBar></SearchBar>
        <IconTags 
        userData={userData}
        setTagFilter={setTagFilter}
        />
        <hr></hr>
      <Container fluid className="allStoreCards" id="homeStoreView">
        {companyData.map((user) => (
          user.company.menu?.length
          ?(localStorage.getItem("filter")
            ?(user.company.tags?.includes(localStorage.getItem("filter"))
          ?(
            <GalleryTile
            key={user._id}
            // tags={user.company.tags}
            username={user.username}
            companyUserImg={user.img}
            companyName={user.username}
            userRatings={user.company.ratings}
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
