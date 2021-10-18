import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <Container className='d-flex justify-content-center mt-5'>
            <div>
                <Form className=' shadow-lg p-3 mb-5 bg-body rounded'>
                    <h3>Register Here</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className='text-center pt-1'>--------------OR---------------</p>
                    <div className='d-flex justify-content-center pb-2'>

                        <Button >Sign In With Google</Button>
                    </div>
                    <p>Already have an account? <Link to='/login'>Login here</Link> </p>
                </Form>
            </div>
        </Container>
    );
};

export default Register;