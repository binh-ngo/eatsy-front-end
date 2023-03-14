import {React, useState, useEffect} from "react";
import "./style.css";
import GalleryTile from "../../components/GalleryTile";
import {Container } from "react-bootstrap";
// placeholder images
import userImg from "./userimg.jpg"
import bigmac from "./beegmac.jpg"
import chickensammy from "./chickensammy.jpg"
import nuggets from "./nuggets.jpg"
import fries from "./fries.jpg"
import SearchBar from "../../components/Search";
import API from "../../utils/api"

const companyObj = [{
  name: "Company 1",
  id: "1234",
  username:"Mcschlongs",
  phoneNumber: "Number",
  email: "String",
  address: "String",
  status: {
    isOpen: "Boolean",
    lastOpen: "Date",
  },
  img:userImg,
  termsOfServiceAgreement: "Boolean",
  depositMethod: "String",
  tags: [" Fast Food"," Greasy"," Food kinda"],
  ratings: ["4.5"],
  menu: [
    {
      name: "Big Mac",
      price: "Number",
      quantity: "Number",
      previousQuantity: "Number",
      allergens: ["Strings"],
      description: "BEEEEEEEG MAC",
      img: bigmac /*a url or reference to an assest...need to figure that one out with the upload image package*/,
    },
    {
      name: "Chicken Nuggets",
      price: "Number",
      quantity: "Number",
      previousQuantity: "Number",
      allergens: ["Strings"],
      description: "crispy chicken bits",
      img: nuggets /*a url or reference to an assest...need to figure that one out with the upload image package*/,
    },    {
      name: "Chicken Sandwhich",
      price: "Number",
      quantity: "Number",
      previousQuantity: "Number",
      allergens: ["Strings"],
      description: "big ol chicken sammy",
      img: chickensammy /*a url or reference to an assest...need to figure that one out with the upload image package*/,
    },    {
      name: "Fries",
      price: "Number",
      quantity: "Number",
      previousQuantity: "Number",
      allergens: ["Strings"],
      description: "potatoes that have been fried",
      img: fries /*a url or reference to an assest...need to figure that one out with the upload image package*/,
    },
  ],
  followers: "Number",
  // virtuals: [avgRating, priceComparison, distance]
},
{
name: "Company 2",
username:"Mcschlongs",
id: "12345",
phoneNumber: "Number",
email: "String",
address: "String",
status: {
  isOpen: "Boolean",
  lastOpen: "Date",
},
img:userImg,
termsOfServiceAgreement: "Boolean",
depositMethod: "String",
tags: [" Fast Food"," greasy"," Food kinda"],
ratings: ["5.0"],
menu: [
  {
    name: "Big Mac",
    price: "Number",
    quantity: "Number",
    previousQuantity: "Number",
    allergens: ["Strings"],
    description: "String",
    img: bigmac /*a url or reference to an assest...need to figure that one out with the upload image package*/,
  },
  {
    name: "Chicken Nuggets",
    price: "Number",
    quantity: "Number",
    previousQuantity: "Number",
    allergens: ["Strings"],
    description: "String",
    img: nuggets /*a url or reference to an assest...need to figure that one out with the upload image package*/,
  },    {
    name: "Chicken Sandwhich",
    price: "Number",
    quantity: "Number",
    previousQuantity: "Number",
    allergens: ["Strings"],
    description: "String",
    img: chickensammy /*a url or reference to an assest...need to figure that one out with the upload image package*/,
  },    {
    name: "Fries",
    price: "Number",
    quantity: "Number",
    previousQuantity: "Number",
    allergens: ["Strings"],
    description: "String",
    img: fries /*a url or reference to an assest...need to figure that one out with the upload image package*/,
  },
],
followers: "Number",
// virtuals: [avgRating, priceComparison, distance]

}
];

function Home() {
  // fetch data
  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [menuData, setMenuData] = useState([]);

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
     <SearchBar></SearchBar>
      <Container fluid className="allStoreCards" id="homeStoreView">
        {userData.map((user) => (
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
      </Container>
    </div>
  );
}

export default Home;
