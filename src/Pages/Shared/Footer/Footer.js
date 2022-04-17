import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white text-center  mt-5'>
            <p className='py-3 fs-3'>&copy; {new Date().getFullYear()} All rights deserved</p>
        
        </div>
    );
};

export default Footer;