import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { loginSvg } from '../../../Svg/Svg';
import './Login.css'

const Login = () => {
    const { emailSignIn, googleSignIn, email, password, setEmail, setPassword, error, setIsloading, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_url)

            })
            .finally(() => setIsloading(false))
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleEmailSignIn = e => {
        e.preventDefault();
        emailSignIn(email, password)
            .then(result => {
                history.push(redirect_url)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            }).finally(() => setIsloading(false))

    }
    return (
        <Container className=' mt-5'>
            <Row lg={2} md={2} sm={1} xs={1} >
                <Col className='mx-auto'  >
                    <Form className='w-100 shadow-lg p-5 mb-5 bg-body form-border' >
                        <h3>Please Sign In</h3>

                        <Form.Floating className="mb-3" >
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3" >
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" aria-required />
                            <label htmlFor="floatingInputCustom">Password</label>
                        </Form.Floating>
                        <p className='text-danger'>{error}</p>
                        <Button variant="primary" className='btn-all rounded-pill border-0 w-100' onClick={handleEmailSignIn} type="submit">
                            Sign In
                        </Button>
                        <div className='or-signin'>
                            <div className='horizontal-line py-2'>
                                <span className='above-line'>OR</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center pb-2'>

                            <Button className='btn-all rounded-pill border-0 w-100'
                                onClick={handleGoogleSignIn}
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