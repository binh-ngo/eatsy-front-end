import React from 'react'
import './style.css'
import Hero from "../Hero/index"

function Stores() {
  const storeObj =
    {
      name:"Mcdonalds",
      phoneNumber:"8888888",
      email:"mcdonalds@email.com",
      address:"123 Mcdonalds St",
      tags: ["vegan", "spicy", "asian"],
      ratings: ["5"],
}

return (
  <div> 
      <Hero 
        name={storeObj.name}
        ratings={storeObj.ratings}
        address={storeObj.address}
        phoneNumber={storeObj.phoneNumber}
        tags={[storeObj.tags]}
      />
    </div>
  )
}

export default Stores