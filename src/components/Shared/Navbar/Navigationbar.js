import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigationbar.css'
const Navigationbar = () => {
    const { user, logOut } = useAuth();
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
                        {
                            user?.email ?
                                <div>
                                    <span className='text-light fw-bold pe-3'>Hello, {user?.displayName}</span>
                                    <Image style={{ width: '45px', marginRight: '15px' }} roundedCircle src={user.photoURL} alt={user.name} />
                                    <Button onClick={logOut} className="bg-primary rounded-pill px-3 fs-5 fw-bold text-white text-decoration-none btn-all border-0">Log Out</Button> </div>
                                :
                                <div>
                                    <Link to='/login'><Button className="bg-primary rounded-pill px-3 me-3 fs-5 fw-bold text-white text-decoration-none btn-all border-0">Sign In</Button></Link>
                                    <Link to="/register">
                                        <Button className="bg-primary rounded-pill px-3 fs-5 fw-bold text-white text-decoration-none btn-all border-0">Register</Button>
                                    </Link>
                                </div>


                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigationbar;