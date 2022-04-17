import React, { useEffect, useState } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

const Feedback = () => {
    const [feedbacks,setFeedbacks]=useState([]);
     useEffect(()=>{
        fetch('Feedback.json')
        .then(res=>res.json())
        .then(data=>setFeedbacks(data))
     }
     ,[]);
    console.log(feedbacks);
    return (
        <div>
            <h1>Feedback</h1>
            {
                feedbacks.map(feedback=><FeedbackItem key={feedback.id} feedback={feedback}></FeedbackItem>)
            }
        </div>
    );
};

export default Feedback;