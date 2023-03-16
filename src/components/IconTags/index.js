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



function IconTags(props) {
  const [array, setArray] = useState([]);
  const tagArr = [
    {
      name: "American",
      src: american,
    },
    {
      name: "Asian",
      src: asian,
    },
    {
      name: "Breakfast",
      src: breakfast,
    },
    {
      name: "Italian",
      src: italian,
    },
    {
      name: "Japanese",
      src: japanese,
    },
    {
      name: "Mexican",
      src: mexican,
    },
    {
      name: "Noodles",
      src: noodles,
    },
    {
      name: "Seafood",
      src: seafood,
    },
    {
      name: "Sweets",
      src: sweets,
    },
    {
      name: "Vegan",
      src: vegan,
    },
    {
      name: "Vegetarian",
      src: vegetarian,
    },
  ];
  useEffect(() => {
    setArray(tagArr);
    if(localStorage.getItem("filter")) {
      setHidden("visible")
    }
  }, []);
  
  function showText(e) {
    e.currentTarget.parentNode.children[0].setAttribute("style", "visibility: visible;")
    e.currentTarget.addEventListener("mouseout", (i) => {
      i.currentTarget.parentNode.children[0].setAttribute("style", "visibility: hidden;")
    })
  }

  const [hidden, setHidden]=useState("hidden")

  function filterUsers(e) {
    props.setTagFilter(e.currentTarget.value)
    localStorage.setItem("filter", e.currentTarget.value)
    setHidden("visible")
    window.location.reload();
  }

  function removeFilters() {
    props.setTagFilter(null)
    localStorage.removeItem("filter")
    setHidden("hidden")
    window.location.reload();
  }

  return (
    <div className="d-flex flex-row">
      <Container className="justify-content-center">
        <Row className="btnRow">
          <Col sm="1">
            <Button variant="light" className="allBtn" id={hidden} value="all" onClick={removeFilters}>
              X
            </Button>
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
          </Row>
      </Container>
    </div>
  );
}

export default IconTags;
