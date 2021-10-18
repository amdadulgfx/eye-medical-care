import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, comment, disease, picture, rating } = review;
    return (
        <div>
            <Col >
                <Card border="light" className='shadow p-3 mb-5 bg-body rounded'>
                    <Card.Body>
                        <div className='d-flex'>

                            <Image variant="top" roundedCircle src={picture} />
                            <div className='ps-2'>
                                <Card.Title>{name}</Card.Title>

                                <p> {disease}</p>
                            </div>
                        </div>
                        <Card.Text className='text-secondary py-1'>
                            Rating: {rating} out of 5
                            <br />
                            {comment}

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;