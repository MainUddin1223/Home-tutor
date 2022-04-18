import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../../images/personal/ukuu.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-center my-4'>About Instructor</h1>
            <Card className=" about-container" style={{ width: '50%' }}>
                <img className='about-img' src={img} alt="" />
                <Card.Body>
                    <Card.Title>Name : MD.Main Uddin</Card.Title>
                    <Card.Title>
                        Qualification : Bachelor of science
                    </Card.Title>
                    <Card.Title>
                       Institute :  Head instructor of EU
                    </Card.Title>
                    <Card.Title>
                       Experience : 5 years.
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;