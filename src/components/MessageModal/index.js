import { React, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import MessageCard from "../MessageCard";
import "./style.css";

function MessageModal() {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="contactBtn me-2 mb-2" onClick={() => handleShow(v)}>
                    Contact
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Messages</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <MessageCard />

                </Modal.Body>
            </Modal>
        </>
    );
}

export default MessageModal;