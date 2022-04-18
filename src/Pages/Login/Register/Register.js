import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../../Shared/Social/Social';

const Register = () => {
    const navigate=useNavigate()
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const registerHandler = (event) => {
        sendEmailVerification()
        event.preventDefault()       
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email,password)
    }
    if(user){
       console.log(user);
       navigate('/')
    }
    if(error){
        console.log(error.message);
    }
    if(sending){
        console.log('eyey');
    }
    return (
        <div>
            <h1 className='text-center my-3'>Register Now</h1>
            <Form className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p onClick={()=>sendEmailVerification()} className='fs-4 text-primary my-2' style={{cursor:"pointer"}}>Verify your email</p>
                <p>Already have an account????<Link to='/login' className='mx-2 text-decoration-none'>Login now</Link></p>
                <Button onClick={registerHandler} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Social></Social>
        </div>
    );
};

export default Register;