import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Review from '../Review/Review';

const UserReview = () => {
    const { reviews } = useData();
    return (
        <div className=' pb-5 px-5'>
            <h5 className=' text-center'>Patients Review</h5>
            <h1 className=' text-center pb-5'>What They Say About Us</h1>
            <Container fluid>
                <Row xs={1} md={3} className="g-4">
                    {reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)}
                </Row>
            </Container>
        </div>
    );
};

export default UserReview;