import React from 'react'
import "./style.css"
import Hero from "../../components/Hero/index"
import heroImg from "../Stores/assets/heroImg.jpg"
import userImg from "../Stores/assets/userImg.jpg"

function Profile() {
  const storeObj =
{
  name:"Mcdonalds",
  phoneNumber:"8888888",
  email:"mcdonalds@email.com",
  address:"123 Mcdonalds St",
  tags: ["vegan", "spicy", "asian"],
  ratings: ["5"],
  heroImg: 
    {
      src: heroImg,
      alt: "hero img",
    }
  ,
  userImg: 
    {
      src:  userImg,
      alt: 'user img'
    }
  
}
  return (
    <div> 
    <Hero 
      name={storeObj.name}
      ratings={storeObj.ratings}
      address={storeObj.address}
      phoneNumber={storeObj.phoneNumber}
      tags={[storeObj.tags]}
      heroImg={storeObj.heroImg.src}
      heroImgAlt={storeObj.heroImg.alt}
      userImg={storeObj.userImg.src}
      userImgAlt={storeObj.userImg.alt}
    />
  </div>
  )
}

export default Profile