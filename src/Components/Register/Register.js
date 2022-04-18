import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../SharedComponents/Loading/Loading';

const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName]= useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);
    
    if (loading || sending) {
        return <Loading></Loading>
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
    }
    if(user){
        navigate('/home');
    }
    return (
        <div>
             <div className='login-container bg-dark'>
            <div className='container w-50 p-5 mx-auto text-white'>
                <h2 className='text-primary text-center p-5'>Please Register</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control ref={nameRef} type="text" placeholder="Enter your Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {
                        (error||emailError)&&<p className='text-danger'>{error.message}</p>
                    }
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Register
                    </Button>
                </Form>

                <p>Already registered? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
            </div>
        </div>

        </div>
    );
};

export default Register;