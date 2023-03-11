import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import {Container} from "react-bootstrap";
import API from "../../utils/api"

const SearchBar = ({Tags, setSearchResults}) => {
  // array that will hold all companies
  const allCompanies = []
  function getAllCompanies(){
    API.getAllData().then(res => {
    for(var i=0; i<res.length; i++){
           allCompanies.push(res[i].company)}
    })}
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if(!e.target.value){
      return setSearchResults()
    }
    const resultsArray = allCompanies.filter(user => allCompanies.tags.includes(e.target.value))
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
                id="homeSearchBar"
                onSubmit={handleSubmit}
                onChange={handleSearchChange}
                placeholder="1234 Main St"
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
