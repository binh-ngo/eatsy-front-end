import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import API from "../../utils/api"
import "./style.css";

export default function SendMessage(props) {
  const [show, setShow] = useState(false);

  const handleFormSubmit = async () => {
    const msgObj = {
      username: props.userTo,
      from: props.userFrom,
      text: document.querySelector("#msgText").value
    }
    // console.log(msgObj)
    await API.sendMessage(msgObj)
    handleClose()
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id={"sendMessage"}>
        {props.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='replyTitle'>CREATE YOUR MESSAGE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label id='replyTitle'>TO</Form.Label>
              <Form.Control 
                id='msgTo'
                type="text"
                placeholder= {props.userTo}
                readOnly
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="msgText"
            >
              <Form.Label id="replyTitle">MESSAGE</Form.Label>
              <Form.Control as="textarea"rows={3} autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {/* TODO add a function on click that fetches the send message api route, and then handles close afterwards (with a banner that says your message was successfully sent) */}
          <Button variant="primary" onClick={handleFormSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}