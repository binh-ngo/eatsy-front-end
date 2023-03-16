import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import MessageCard from "../MessageCard";
import "./style.css";
import API from "../../utils/api"

function MessageModal(props) {
    // TODO test if the prop is working as expected
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [msgData, setMsgData] = useState([]);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="msgModal btn-style-primary lato" onClick={() => handleShow(v)}>
                    View Messages
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="bowlby"id="messagesTitle">MESSAGES</Modal.Title>
                </Modal.Header>

                <Modal.Body className="lato" id="allMessageBox">
                    {props.userData.messages?.length
                        ? (
                            props.userData.messages.map(msg => {
                                return <MessageCard
                                    text={msg.text}
                                    from={msg.from}
                                />
                            })
                        ) : <p>No messages to display</p>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MessageModal;