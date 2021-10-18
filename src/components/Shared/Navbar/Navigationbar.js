import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigationbar.css'
const Navigationbar = () => {

    return (

        <Navbar className='navbar-bg' collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img src={'https://i.ibb.co/0GGT4z3/eye-logo-32x32.png'} alt='eye plus logo' /> <b>EYE+</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto  ">
                        <Link className=" pe-3 fs-5 fw-bold text-white text-decoration-none" to="/home">Home</Link>
                        <Link className=" pe-3 fs-5 fw-bold text-white text-decoration-none" to="/doctors">Doctors</Link>
                        <Link className=" pe-3 fs-5 fw-bold text-white text-decoration-none" to="/services">Services</Link>
                        <Link className=" pe-3 fs-5 fw-bold text-white text-decoration-none" to="/blog">Blog</Link>
                        <Link className=" pe-3 fs-5 fw-bold text-white text-decoration-none" to="/about">About Us</Link>

                    </Nav>
                    <Nav>
                        <Link to='/login'><Button className="bg-primary rounded-pill px-3 me-3 fs-5 fw-bold text-white text-decoration-none btn-all border-0">Log in</Button></Link>
                        <Link to="/register">
                            <Button className="bg-primary rounded-pill px-3 fs-5 fw-bold text-white text-decoration-none btn-all border-0">Register</Button>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigationbar;