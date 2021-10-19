import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useData();
    // console.log(services, serviceId);

    const myservice = services.filter(service => service.id == serviceId)
    // const { title, img, description } = myservice[0]
    return (
        <div >

            <h6 className='text-center pt-5'> Service ID: {serviceId}</h6>
            <div className='d-flex justify-content-center my-5'>

                <Card className='border-light text-secondary' style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={myservice[0]?.img} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold fs-2'>{myservice[0]?.title}</Card.Title>
                        <Card.Text>
                            {myservice[0]?.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ServiceDetails;