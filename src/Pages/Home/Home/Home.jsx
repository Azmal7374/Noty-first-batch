import React from 'react';
import Banner from '../Banner/Banner';
import Explorez from '../Explorez/Explorez';
import Enterprises from '../Banner/Enterprises/Enterprises';

const Home = () => {
    return (
        <div className='w-'>
        <Banner></Banner>
        <Explorez></Explorez>
        <Enterprises></Enterprises>
        </div>
    );
};

export default Home;