import React from 'react';
import { Container } from 'react-bootstrap';
import Doctors from './Doctors/Doctors';
import Banner from './Header/Banner/Banner';
import TopServices from './TopServices/TopServices';
import UserReview from './UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopServices></TopServices>
            <Doctors></Doctors>
            <UserReview></UserReview>
        </div >
    );
};

export default Home;