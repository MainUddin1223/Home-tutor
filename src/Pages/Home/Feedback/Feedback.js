import React, { useEffect, useState } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import './Feedback.css'

const Feedback = () => {
    const [feedbacks,setFeedbacks]=useState([]);
     useEffect(()=>{
        fetch('Feedback.json')
        .then(res=>res.json())
        .then(data=>setFeedbacks(data))
     }
     ,[]);
    return (
        <div style={{height:"80vh"}}>
            <h1 className='text-center my-4'>Feedback</h1>
            <div className="feedback-container">
            {
                feedbacks.map(feedback=><FeedbackItem key={feedback.id} feedback={feedback}></FeedbackItem>)
            }
            </div>
        </div>
    );
};

export default Feedback;