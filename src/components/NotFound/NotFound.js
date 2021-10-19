import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { notFound } from '../../Svg/Svg';
const NotFound = () => {

    return (
        <Container className=''>
            <Row lg={2} sm={1} xs={1} md={2} style={{ height: '600px' }}>
                <Col className='d-flex align-items-center  justify-content-md-end  justify-content-center justify-content-lg-end fs-1'>
                    <h1 className='text-primary fw-bold fs-1 py-5'>404 Page Not Found</h1>
                </Col>
                <Col >
                    {notFound}
                </Col>

            </Row>
        </Container>
    );
};

export default NotFound;