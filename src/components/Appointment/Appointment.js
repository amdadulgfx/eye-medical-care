import React from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import './Appointment.css'
const Appointment = () => {

    return (
        <div className="form-bg mb-5">
            <h1 className='text-center py-5'>Book An Appointment</h1>
            <Container className='d-flex justify-content-center '>
                <Form className='w-75 shadow-lg p-5 mb-5 bg-body form-border  p-5'>
                    <Row className="mb-3 g-3" xs={1} sm={1} md={2} lg={2} >
                        <Col>
                            <Form.Group controlId="formGridName">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    <Row className="mb-3 g-3" xs={1} sm={1} md={2} lg={2} >
                        <Col>
                            <Form.Group controlId="formGridPhone">
                                <Form.Control type="number" placeholder="Your Phone" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridSubject">
                                <Form.Control type="text" placeholder="Subject To Request" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    <Row className="mb-3 g-3" xs={1} sm={1} md={2} lg={3} >
                        <Col>
                            <Form.Group controlId="formGridCity">
                                <Form.Control type="text" placeholder="Your City" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>London</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridZip">
                                <Form.Control type="text" placeholder="Zip Code" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridDate">
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control type='date' placeholder="Appointment Date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control as="textarea" rows={5} placeholder="Write Message" />
                    </Form.Group>




                    <div className='text-center'>

                        <Button className='btn-all border-0 rounded-pill px-4' type="submit">
                            Get An Appointment
                        </Button>
                    </div>
                </Form>
            </Container>




        </div>
    );
};

export default Appointment;