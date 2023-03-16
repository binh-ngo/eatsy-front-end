import React from "react";
import Card from 'react-bootstrap/Card'
import SendMessageModal from "../../components/SendMessageModal";
import "./styles.css"

export default function MessageCard(props) {
    return (
        <Card id="messageCard" className="card position-relative">
            <div id="messageContainer">
                <div id="messageInfoDiv">
                    <Card.Title id="messageFrom"><a id="noDecoration" href={`https://eatsyfoods.netlify.app/users/${props.from}`}>{props.from}</a></Card.Title>
                    {/* <Card.Body className="numMessages">1</Card.Body> */}
                </div>
                <div id="messageContents">
                    <Card.Body id="messageText">{props.text}</Card.Body>
                </div>
                <div id="replyBtn" className="right-0">
                    <SendMessageModal
                        userTo={props.from}
                        userFrom={localStorage.getItem("username")}
                        name="Reply"
                    />
                </div>
            </div>
        </Card>
    )
}