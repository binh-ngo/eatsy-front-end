import React from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
 
function Sidenav({ cartArr, setCartArr }) {
  // function that creates a div with info for each dish
  const arrayMap = cartArr.map(companyObj => {
    <div>
    <img src={companyObj.menu.img} alt={companyObj.menu.description}/>
    <p>{companyObj.menu.name}</p>
    <p>{companyObj.menu.description}</p>
    {/* <p>{companyObj.menu.quantity}</p>   adjustable | need to make a function that multiplies the price  */}
    <p>{companyObj.menu.price}</p>    {/* amount x price */}
  </div>
    return arrayMap;
  })
  return (
    <div>
      <aside>
        <h2>
          Items in your Cart
        </h2>
        {arrayMap}
            </aside>
          </div>
          )
      }
export default Sidenav
