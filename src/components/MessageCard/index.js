import React from "react";
import Card from 'react-bootstrap/Card'

export default function MessageCard(props) {
    return (
        <Card id="messageCard" className="card">
            <div id="messageInfoDiv">
                <Card.Title id="messageFrom">{props.from}</Card.Title>
                {/* <Card.Body className="numMessages">1</Card.Body> */}
            </div>
            <div id="messageContents">
                <Card.Body id="messageText">{props.text}</Card.Body>
            </div>
        </Card>
    )
}