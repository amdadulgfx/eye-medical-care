import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, degree, patients, clinic, picture } = doctor;
    // console.log(clinic);
    return (
        <div>


            <Col >
                <Card className='shadow-sm p-3 mb-5 bg-body rounded'>
                    <div className='text-center'>

                        <Image style={{ width: "100px" }} variant="top" src={picture} rounded />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}, {degree}</Card.Title>
                        <Card.Text className="text-secondary fw-bold">
                            {patients}+ Patients <br />
                            {clinic}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Doctor;