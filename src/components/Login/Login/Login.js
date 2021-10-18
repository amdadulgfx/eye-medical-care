import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className='d-flex justify-content-center mt-5'>
            <div>
                <Form className='py-5 shadow-lg p-3 mb-5 bg-body rounded'>
                    <h2>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className='text-center pt-1'>--------------or---------------</p>
                    <Button>Sign In With Google</Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;