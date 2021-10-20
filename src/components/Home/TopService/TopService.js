import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopService = ({ service }) => {
    const { id, title, description, img } = service;
    return (

        <Col>

            <Card className='hover-shadow  w-100 shadow-lg  bg-body form-border border-0' >
                <Card.Img variant="top" src={img} />

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='text-secondary'>
                        {description.slice(0, 120)}...
                    </Card.Text>
                    <Link to={`/service-details/${id}`}>
                        <Button className='rounded-pill btn-all border-0'>See Details</Button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>

    );
};

export default TopService;