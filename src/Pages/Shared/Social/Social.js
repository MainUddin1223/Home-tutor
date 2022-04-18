import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../../images/social/facebook.png'
import google from '../../../images/social/google.png'
import github from '../../../images/social/GitHub-Mark.png'


const Social = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithFacebook, facebookUser, loading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const facebookSignIn = (event) => {
        event.preventDefault();
        signInWithFacebook()
        event.preventDefault();
    }
    const githubSignIn=event=>{
        event.preventDefault();
        signInWithGithub()

    }
    const googleSignIn=(event)=>{
        event.preventDefault();
        signInWithGoogle();
    }
    if (githubUser) {
        navigate('/')
    }
    if (facebookUser) {
console.log('fb');
    }
    if(googleUser){
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px', }} className="bg-primary w-25"></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-25"> </div>
            </div>
            <div className='w-lg-25 d-block m-auto'>
                <button onClick={googleSignIn} className='btn my-2 btn-info w-50 d-block m-auto'>
                    <img style={{ width: '30px', marginRight: '10px' }} src={google} alt="" />
                    Google Sign In
                </button>
                <button onClick={facebookSignIn} className='btn my-2 btn-info w-50 d-block m-auto'>
                    <img style={{ width: '30px', marginRight: '10px' }} src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button onClick={githubSignIn} className='btn my-2 btn-info w-50 d-block m-auto'>
                    <img style={{ width: '30px', marginRight: '10px' }} src={github} alt="" />
                    GitHub Sign In
                </button>
            </div>
        </div>
    );
};

export default Social;