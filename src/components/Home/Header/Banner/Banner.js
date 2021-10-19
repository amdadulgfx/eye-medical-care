import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className='text-info'>

            <Carousel>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 image-fit"
                        src="https://i.ibb.co/6WsKbzt/5178621.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-light'>
                        <h1 >We Only Give Best Care To Your Eyes</h1>
                        <p>Your eyes can capture and interpret more than one-million pulse signals per millisecond and transmit to the brain. Your eyes are truly amazing organs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-fit"
                        src="https://i.ibb.co/PQFn0hn/5178621-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-light'>
                        <h1>High Innovation Professional Eye Care</h1>
                        <p>Your eyes can capture and interpret more than one-million pulse signals per millisecond and transmit to the brain. Your eyes are truly amazing organs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-fit"
                        src="https://i.ibb.co/92vcCwq/5178621-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-light'>
                        <h1>Take Care of Your Eye Health Here</h1>
                        <p>Sight and vision help to connect people with their surroundings. Our world is filled with an extreme variety of colors, shapes, and patterns.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};

export default Banner;