import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useData();
    return (
        <div className='py-5'>
            <h1 className='text-center pb-5'>Our High Qualified Doctors</h1>
            <Container >

                <Row xs={2} md={4} className="g-2">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>

    );
};

export default Doctors;