import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import API from "../../utils/api"

export default function SendMessage() {
  const [show, setShow] = useState(false);

  const handleFormSubmit = async () => {
    const msgObj = {
      username: "Lukas",
      from: "Snickerdoodle",
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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="email"
                // TODO update this placeholder to be the user youre sending to
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="msgText"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea"rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* TODO add a function on click that fetches the send message api route, and then handles close afterwards (with a banner that says your message was successfully sent) */}
          <Button variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}