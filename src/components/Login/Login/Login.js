import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { loginSvg } from '../../../Svg/Svg';
import './Login.css'

const Login = () => {
    const { emailSignIn, googleSignIn } = useAuth();
    const handleEmailSignIn = () => {

    }
    return (
        <Container className=' mt-5'>
            <Row lg={2} md={2} sm={1} xs={1} >
                <Col className='mx-auto'  >
                    <Form className='w-100 shadow-lg p-5 mb-5 bg-body rounded'>
                        <h3>Please Sign In</h3>

                        <Form.Floating className="mb-3" >
                            <Form.Control type="email" placeholder="Enter email" />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3" >
                            <Form.Control type="password" placeholder="Password" />
                            <label htmlFor="floatingInputCustom">Password</label>
                        </Form.Floating>

                        <Button variant="primary" className='btn-all rounded-pill border-0 w-100' onClick={emailSignIn} type="submit">
                            Sign In
                        </Button>
                        <div className='or-signin'>
                            <div className='horizontal-line py-2'>
                                <span className='above-line'>OR</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center pb-2'>

                            <Button className='btn-all rounded-pill border-0 w-100'
                                onClick={googleSignIn}
                            >Sign In With Google</Button>
                        </div>
                        <p>Don't have an account? <Link to='/register'>Register here</Link> </p>
                    </Form>
                </Col>
                <Col>
                    {loginSvg}
                </Col>
            </Row>
        </Container>
    );
};

export default Login;