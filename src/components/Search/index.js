import React, {useState, useEffect} from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import {Container} from "react-bootstrap";
import API from "../../utils/api"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) =>{
    setSearchInput(searchValue)
    console.log(allData)

  }

  return (

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
  );
}
export default SearchBar
