import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../../Shared/Social/Social';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogIn = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='fs-5 text-danger'>PLease check your email or password</p>
        </div>
    }
    return (
        <div style={{ height: "80vh" }}>
            <h1 className='text-center my-3'>Login </h1>
            <Form className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorMessage}
                <p>New to Home Tutor????<Link to='/register' className='mx-2 text-decoration-none'>Register now</Link></p>
                <Button onClick={handleLogIn} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Social></Social>
        </div>
    );
};

export default Login;