import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import TopService from '../TopService/TopService';
import './TopServices.css'
const TopServices = () => {
    const { services } = useData();
    return (
        <div className='service-bg'>
            <Container >
                <div>
                    <h1 className='text-center pt-5'>Eye Plus <span className='text-primary'>Top Services</span> </h1>
                    <Row xs={1} md={2} lg={3} className="g-4 py-5 ">

                        {
                            services.map(service => <TopService
                                key={service.id}
                                service={service}
                            ></TopService>)
                        }

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default TopServices;