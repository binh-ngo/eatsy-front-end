import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import MessageCard from "../MessageCard";
import "./style.css";
import API from "../../utils/api"

function MessageModal(props) {
    console.log(props)
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
                <Button key={idx} className="msgModal" onClick={() => handleShow(v)}>
                    View Messages
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Messages</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* TODO make a function that maps and outputs message cards */}
                    {msgData.map(msg => {
                        return <MessageCard
                        text = {msg.text}
                        from = {msg.from}
                        />
                    })}

                </Modal.Body>
            </Modal>
        </>
    );
}

export default MessageModal;