import React from 'react';
import { Card } from 'react-bootstrap';
import './FeedbackItem.css'

const FeedbackItem = ({ feedback }) => {
  const { img, name, comment } = feedback;
  return (
    <div>
      <Card className=" feedback-container" style={{ width: '18rem' }}>
        <img className='feedback-img' src={img} alt="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {comment}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeedbackItem;