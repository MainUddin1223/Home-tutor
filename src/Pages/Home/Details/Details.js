import React from 'react';

import { useNavigate} from 'react-router-dom';
import './Detail.css'

const Details = () => {
    const navigate = useNavigate()
    const handleCheckOut = (event) => {
        event.preventDefault()
        navigate('/confirmed')
    }
    return (
        <div style={{ height: "80vh" }}>
            <h1 className='text-center text-success my-5'>Checkout</h1>
            <div className='input-container'>
                <input className='input-detail' type="email" name="email" id="" placeholder='Your email' required />
                <div className='input-detail'>
                    <input className='address-detail' type="text" placeholder='your address' required/>
                    <input className='address-detail' type="text" placeholder='Phone Number' required/>
                </div>
                <input className='input-detail' type="password" placeholder='Confirm password' required/>
            </div>
            <button onClick={handleCheckOut} className='btn btn-primary d-block mt-2 m-auto'>Confirm</button>
        </div>
    );
};

export default Details;