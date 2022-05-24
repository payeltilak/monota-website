import React from 'react';
import AutoPart from './AutoPart';

import Banner from './Banner';
import Car from './Car';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Car></Car>
            <AutoPart></AutoPart>
           
        </div>
    );
};

export default Home;