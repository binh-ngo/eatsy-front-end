import {React, useState, useEffect} from "react";
import "./style.css";
import {Card,Form, Button, Row, Col} from 'react-bootstrap'
import placeholder from "../../utils/assests/placeholder.png"
import API from "../../utils/api"

export default function EditCards(props) {
    const [name, setName] = useState(props.name)
    const [placeholder, setPlaceholder] = useState(props.name)
    const [description, setDescription] = useState(props.description)
    const [allergens, setAllergens] = useState(props.allergens)
    const [pName, setPName] = useState("")
    const [pDescription, setPDescription] = useState("")
    const [pAllergens, setPAllergens] = useState("")

    useEffect(() => {
      setPName(props.name)
      setPDescription(props.description)
      setPAllergens(props.allergens)
    })

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

    async function editItemInfo(e) {
      const form = e.target.parentNode.parentNode.parentNode
      const itemObj = {
        name: form.children[0].children[1].value || pName || "",
        description: form.children[1].children[1].value || pDescription || "",
        allergens: form.children[2].children[1].value || pAllergens,
        itemId: props.id
      }
      console.log(itemObj)
      await API.updateItem(itemObj)
      window.location.reload()
    }

    async function deleteItem() {
      const itemObj = {
        itemId: props.id
      }
      await API.deleteItem(itemObj);
      window.location.reload();
    }

  return (
    <Card id="editCard" className="card col-5" key={props.id}>
      <div id="imgContainer">
        <a href={props.link}>
          <Card.Img id="editCardImg" src={props.src || placeholder}alt={props.alt}></Card.Img>
        </a>
      </div>
      <div id="editItemInfoDiv">
      <Form className="editCardForm" controlId="editMenuForm">
          <Form.Group className="mb-3" controlId={`${props.id}-name`}>
            <Form.Label className="editCardLabel">Name</Form.Label>
            <Form.Control value={name} name="name" onChange={handleInputChange} type="text" placeholder={placeholder} />
          </Form.Group>

          <Form.Group className="mb-3" controlId={`${props.id}-description`}>
            <Form.Label className="editCardLabel">Description</Form.Label>
            <Form.Control value={description} name="description" onChange={handleInputChange} type="email" placeholder={description} />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId={`${props.id}-allergens`}>
            <Form.Label className="editCardLabel">Allergens</Form.Label>
            <Form.Control value={allergens} name="allergens" onChange={handleInputChange} type="email" placeholder={allergens} />
          </Form.Group>
          <Row>
          <Col sm="5">
          <Button className="editCardBtn" variant="primary" onClick
          ={editItemInfo}>
            Update
          </Button>
          </Col>
          <Col sm="6">
          <Button className="editCardBtn" variant="danger" onClick={deleteItem}>
            Delete
          </Button>
          </Col>
          </Row>
          </Form>
      </div>
    </Card>
  )
}

