import React from 'react'
import {Card} from 'react-bootstrap'
import './style.css'

function AddDish() {
  return (
    <Card id="addDishCard" className="card col-5">
        <Card.Title id="addDishText">Add Dish</Card.Title>
        <Card.Text id="addDishPlus">+</Card.Text>
  </Card>
  )
}

export default AddDish;