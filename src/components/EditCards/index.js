import {React, useState} from "react";
import "./style.css";
import {Card,Form, Button, Row, Col} from 'react-bootstrap'
import placeholder from "../../utils/assests/placeholder.png"

export default function EditCards(props) {
    const [name, setName] = useState(props.name)
    const [placeholder, setPlaceholder] = useState(props.name)
    const [description, setDescription] = useState(props.description)
    const [allergens, setAllergens] = useState(props.allergens)
    // TODO add api fetch to edit item
    const handleInputChange = (e) => {
      const {target} = e;
      const inputType = target.name;
      const inputValue = target.value;
      if(inputType === 'description') {
        setDescription(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else if(inputType ==="allergens") {
        setAllergens(inputValue);
      }
    }
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setName('');
      setDescription('');
      setAllergens('');
    }
  return (
    <Card id="editCard" className="card col-5">
      <div id="imgContainer">
        <a href={props.link}>
          <Card.Img id="editCardImg" src={props.src || placeholder}alt={props.alt}></Card.Img>
        </a>
      </div>
      <div id="editItemInfoDiv">
      <Form className="editCardForm" controlId="editMenuForm">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="editCardLabel bowlby">Name</Form.Label>
            <Form.Control className="lato" value={name} name="name" onChange={handleInputChange} type="text" placeholder={placeholder} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label className="editCardLabel bowlby">Description</Form.Label>
            <Form.Control className="lato" value={description} name="email" onChange={handleInputChange} type="email" placeholder={description} />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicAllergens">
            <Form.Label className="editCardLabel bowlby">Allergens</Form.Label>
            <Form.Control className="lato" value={allergens} name="address" onChange={handleInputChange} type="email" placeholder={allergens} />
          </Form.Group>
          <Row>
          <Col sm="5">
          <Button className="editCardBtn lato" variant="danger" onSubmit={handleFormSubmit}>
            Update
          </Button>
          </Col>
          <Col sm="6">
          <Button className="editCardBtn lato" variant="primary">
            Delete
          </Button>
          </Col>
          </Row>
          </Form>
      </div>
    </Card>
  )
}

