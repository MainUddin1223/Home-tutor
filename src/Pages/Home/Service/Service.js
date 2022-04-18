import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './Service.css'
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate=useNavigate();
    const handleDetail=(id)=>{
        navigate(`/service/${id}`)
    }
    const { id,name, img, price, description, topics } = service;
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
                        topics.map(topic => <p>
                            <FontAwesomeIcon className='check-icon' icon={faSquareCheck} />
                            {topic}</p>)
                    }
                </Card.Text>
                <Link to={`/service/${id}`}>
                <Button onClick={()=>handleDetail(id)} variant="primary" >Purchase Now</Button>
                    </Link>
            </Card.Body>
        </Card>
    );
};

export default Service;