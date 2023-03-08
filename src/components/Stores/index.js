import React from "react";
import ItemCards from "../ItemCards/index";
import "./style.css";
import taco from "./taco.jpg";

const Stores = () => {
  const cardArray = [
    {
      name: "taco",
      id:"223",
      allergens: ["Fish", "Dairy"],
      description: "Fish Taco with all the fixins",
      img: taco,
    },
    {
      name: "taco",
      id:"224",
      allergens: ["Fish", "Dairy"],
      description: "Fish Taco with all the fixins",
      img: taco,
    },
  ];

  return (
    <div>
      <div>Stores</div>

      {/* Brams Bottom ;) */}
      <div>MENU</div>
      <div id="itemCardsContainer">
        <div id="bottomCardHalf" className="row">
          {cardArray.map((item) => (
            <ItemCards
            key={item.id}
              name={item.name}
              allergens={[item.allergens]}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
