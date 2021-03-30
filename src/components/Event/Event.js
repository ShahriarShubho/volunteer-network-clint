import React from 'react';
import { Card, Button} from 'react-bootstrap';
import './Event.css'
import {Link} from "react-router-dom";

const Event = (props) => {
    const {name, img, _id} = props.events
    return (
<Card as={Link} to={'/events/'+_id} style={{ textDecoration: 'none',width: '12rem', margin : '20px', padding : '10px', textAlign : 'center'}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Button variant="primary">Details</Button>
  </Card.Body>
</Card>

    );
};

export default Event;