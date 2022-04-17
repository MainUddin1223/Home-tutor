import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './Service.css'

const Service = ({ service }) => {
    const { name,img, price, description, topics } = service;

    return (
        <Card className='service-card'>
            <Card.Img className='service-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                   Price: $ {price}
                </Card.Text>
                <Card.Text>
                    <h4>You can learn</h4>
                    {
                        topics.map(topic=><p>
                            <FontAwesomeIcon className='check-icon' icon={faSquareCheck} />
                            {topic}</p>)
                    }
                </Card.Text>
                <Button variant="primary">Purchase Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;