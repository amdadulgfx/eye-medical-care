import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
                        <div className='text-center'>

                            <Link to='/appointment' > <Button className=" pe-3 fs-5 fw-bold text-white text-decoration-none btn-all border-0 rounded-pill py-2 ">Get An Appointment</Button>  </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default ServiceDetails;