import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { registerSvg } from '../../Svg/Svg';
const Register = () => {


    // const [error, setError] = useState('');
    const { registerNewUser, googleSignIn, setError, error, email, setEmail, password, setPassword, setName } = useAuth();

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
        // console.log(e.);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be 6 Characters')
            return;
        }
        if (password.length > 20) {
            setError(`Password Shouldn't be more than 20 Characters`)
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Should Contain 2 Uppercase');
            return;
        }
        registerNewUser(email, password)

    }


    return (
        <Container className=' mt-5'>
            <Row lg={2} md={2} sm={1} xs={1}  >
                <Col style={{ transform: 'scaleX(-1)' }}>{registerSvg}</Col>
                <Col className='mx-auto'  >

                    <Form onSubmit={handleRegistration} className=' w-100 shadow-lg p-5 mb-5 bg-body form-border' >
                        <h3>Register Here</h3>
                        <Form.Floating className="mb-3" >

                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Your Name" />
                            <label htmlFor="floatingInputCustom">Your Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3" >
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>


                        <Form.Floating className="mb-3" >

                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                            <label htmlFor="floatingInputCustom">Password</label>
                        </Form.Floating>
                        <p className='text-danger'>{error}</p>

                        <Button variant="primary" className='btn-all rounded-pill border-0 w-100' type="submit">
                            Submit
                        </Button>

                        <div className='or-signin'>
                            <div className='horizontal-line py-2'>
                                <span className='above-line'>OR</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pb-2'>

                            <Button onClick={googleSignIn} className='btn-all rounded-pill border-0 w-100'>Sign In With Google</Button>
                        </div>
                        <p>Already have an account? <Link to='/login'>Sign In here</Link> </p>
                    </Form>

                </Col>

            </Row>
        </Container>
    );
};

export default Register;