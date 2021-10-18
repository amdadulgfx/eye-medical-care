import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerHeaderStyle = {
        color: '#16A6FF'
    }
    return (
        <div style={{ backgroundColor: '#001846', color: "white", padding: '20px 0px' }}>
            <Container>
                <Row>
                    <Col>
                        <h3 style={footerHeaderStyle}>Contact</h3>
                        <p>Phone: 564-865-952</p>
                        <p>Email: hello@eyeplus.com</p>
                        <p>Address: 153, Baker Street, London</p>
                    </Col>
                    <Col>
                        <h3 style={footerHeaderStyle}>About</h3>
                        <Link className='text-decoration-none text-white fw-bold' to='/doctors'>Doctors</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/services'>Services</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/departments'>Departments</Link> <br />

                        <Link className='text-decoration-none text-white fw-bold' to='/about'>About Us</Link>
                    </Col>
                    <Col>
                        <h3 style={footerHeaderStyle}>Explore</h3>
                        <Link className='text-decoration-none text-white fw-bold' to='/blog'>Blog</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/appointment'>Appointment</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/shop'>Shop</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/portfolio'>Portfolio</Link> <br />
                    </Col>
                    <Col>
                        <h3 style={footerHeaderStyle}>Support</h3>
                        <Link className='text-decoration-none text-white fw-bold' to='/online-support'>Online Support</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/consultancy'>Free Consultancy</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/call'>Make Call</Link> <br />
                        <Link className='text-decoration-none text-white fw-bold' to='/service-support'>24/7 Service</Link> <br />
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className='text-center pt-3'>Copyright ©2021 EyePlus Designed By AmdadulGFX</p>
        </div>

    );
};

export default Footer;