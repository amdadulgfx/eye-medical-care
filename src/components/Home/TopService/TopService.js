import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const TopService = ({ service }) => {
    const { title, description, img } = service;
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 120)}...
                    </Card.Text>
                    <Button className='rounded-pill btn-all border-0'>See Details</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default TopService;