import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const backgroundStyle = {
  backgroundImage: 'url("https://png.pngtree.com/element_origin_min_pic/17/09/19/c41d7885a670bfa2ff5190d9f69d63bd.jpg")',
}

// Styling object variables to apply to award card
const textStyle = {
  margin: "auto",
  textAlign: "center",
  color: "white"
}

const textStyle2 = {
  margin: "auto",
  textAlign: "center",
  color: "black"
}

const cardStyle = {
  marginBottom: "10px"
}

const AwardCard = props => (
  <Card style={cardStyle}>
    <CardBody style={backgroundStyle}>
      <img alt="award" src="https://c1.sfdcstatic.com/content/dam/blogs/us/thumbnails/salesforce-trailblazer-awards/tba_white.png" width="100px" height="50" />
      <h2><p style={textStyle2}>{props.title}</p></h2>
      <center><img alt="avatar" src="https://www.pardot.com/wp-content/uploads/2018/02/customer-homepage-fg.png" width="100px" /></center>
      <h5><p style={textStyle}>{props.text}</p></h5>
      <h6 style={textStyle}>From: {props.sender}</h6>
      <h6 style={textStyle}>To: {props.receiver}</h6>
    </CardBody>
  </Card >
)

export default AwardCard;