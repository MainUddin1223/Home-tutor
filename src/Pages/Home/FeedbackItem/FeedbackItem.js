import React from 'react';
import { Button,Card } from 'react-bootstrap';

const FeedbackItem = ({feedback}) => {
    const {img,name,fedback}=feedback;
    return (
        <div>
            <img src={img} alt="omg" />
           {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card> */}
        </div>
    );
};

export default FeedbackItem;