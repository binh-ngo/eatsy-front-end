import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import american from "./assets/american.png";
import asian from "./assets/asian.png";
import noodles from "./assets/noodles.png";
import breakfast from "./assets/breakfast.png";
import japanese from "./assets/japanese.png";
import sweets from "./assets/sweets.png";
import vegan from "./assets/vegan.png";
import vegetarian from "./assets/vegetarian.png";
import mexican from "./assets/mexican.png";
import italian from "./assets/italian.png";
import seafood from "./assets/seafood.png";
import "./style.css";
import GalleryTile from "../GalleryTile";

function IconTags(props) {
  const [array, setArray] = useState([]);
  const tagArr = [
    {
      name: "american",
      src: american,
    },
    {
      name: "asian",
      src: asian,
    },
    {
      name: "seafood",
      src: seafood,
    },
    {
      name: "breakfast",
      src: breakfast,
    },
    {
      name: "vegetarian",
      src: vegetarian,
    },
    {
      name: "noodles",
      src: noodles,
    },
    {
      name: "japanese",
      src: japanese,
    },
    {
      name: "sweets",
      src: sweets,
    },
    {
      name: "vegan",
      src: vegan,
    },
    {
      name: "mexican",
      src: mexican,
    },
    {
      name: "italian",
      src: italian,
    },
  ];
  useEffect(() => {
    setArray(tagArr);
  }, []);

  function getUsers() {
    const userList = props.userData;
    return userList;
  }
  function filterUserList(filter) {
    let returnFilteredUsers = getUsers().filter((tag) => tag.name === filter);
    return returnFilteredUsers;
  }
  const [filteredUsers, setFilteredUsers] = useState(null);
  useEffect(() => {
    setFilteredUsers(getUsers());
  }, []);

  function filterUsers(e) {
    localStorage.setItem("filter",e.currentTarget.value)
    // let filterChosen = e.currentTarget.value;
    // filterChosen != "all"
    //   ? setFilteredUsers(filterUserList(filterChosen))
    //   : setFilteredUsers(getUsers());
  }

  function showText(e) {
    e.currentTarget.parentNode.children[0].setAttribute("style", "visibility: visible;")
    e.currentTarget.addEventListener("mouseout", (i) => {
      i.currentTarget.parentNode.children[0].setAttribute("style", "visibility: hidden;")
    })
  }

  return (
    <div className="d-flex flex-row">
      <Container className="justify-content-center">
        <Row>
          <Col sm="1">
            {/* <Button value="all" onClick={filterUsers}>
              All
            </Button> */}
          </Col>
          {array.map((tag, index) => {
            return (
              <Col sm="1">
                <div className="filterBtn">
                  <p className="btnNames">{tag.name}</p>
                  <Button
                    onMouseOver={showText}
                    key={index}
                    value={tag.name}
                    onClick={filterUsers}
                    variant="light"
                    title={tag.name}
                  >
                    <img
                      className="dishTags"
                      src={tag.src}
                      alt={tag.name}
                      width="30px"
                      height="30px"
                    />
                  </Button>
                </div>
              </Col>
            );
          })}
          {filteredUsers &&
            filteredUsers.map((user) => (
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
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default IconTags;
