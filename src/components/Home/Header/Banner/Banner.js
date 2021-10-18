import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='text-info'>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-fit"
                        src="https://i.ibb.co/6WsKbzt/5178621.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-color-new'>
                        <h1 >We Only Give Best Care To Your Eyes</h1>
                        <p>Your eyes can capture and interpret more than one-million pulse signals per millisecond and transmit to the brain. Your eyes are truly amazing organs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-fit"
                        src="https://i.ibb.co/BTPHbD0/5122877.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-color-new'>
                        <h1>High Innovation Professional Eye Care</h1>
                        <p>Your eyes can capture and interpret more than one-million pulse signals per millisecond and transmit to the brain. Your eyes are truly amazing organs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-fit"
                        src="https://i.ibb.co/GCY22Lb/5178631.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-color-new'>
                        <h1>Take Care of Your Eye Health Here</h1>
                        <p>Your eyes can capture and interpret more than one-million pulse signals per millisecond and transmit to the brain. Your eyes are truly amazing organs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};

export default Banner;