import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../../Shared/Social/Social';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
    const handleEmail = (event) => {
        setEmail(event.target.value);

    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleRestPassword = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('check email')
            })
    }


    const handleLogIn = (event) => {
        event.preventDefault()
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
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlar={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                {errorMessage}
                <p>New to Home Tutor????<Link to='/register' className='mx-2 text-decoration-none'>Register now</Link></p>
                <Button onClick={handleLogIn} variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Button onClick={handleRestPassword} variant="primary" type="submit">
                    Forget password
                </Button>
            </Form>
            <Social></Social>
        </div>
    );
};

export default Login;