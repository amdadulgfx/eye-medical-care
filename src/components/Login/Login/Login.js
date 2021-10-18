import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <Container className='d-flex justify-content-center mt-5'>
            <div>
                <Form className='shadow-lg p-3 mb-5 bg-body rounded'>
                    <h3>Please Login</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" className='btn-all rounded-pill border-0 w-100' type="submit">
                        Log In
                    </Button>
                    <p className='text-center pt-1'>--------------OR---------------</p>
                    <div className='d-flex justify-content-center pb-2'>

                        <Button className='btn-all rounded-pill border-0 w-100'
                            onClick={googleSignIn}
                        >Sign In With Google</Button>
                    </div>
                    <p>Don't have an account? <Link to='/register'>Register here</Link> </p>
                </Form>
            </div>
        </Container>
    );
};

export default Login;