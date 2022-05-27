import React from 'react';
import AutoParts from './AutoParts';
import b_1 from '../../Images/b1.jpg';
import b_2 from '../../Images/b2.jpg';
import b_3 from '../../Images/b3.jpg';
import b_4 from '../../Images/b4.jpg';
import b_5 from '../../Images/b6.jpg';
import b_6 from '../../Images/b7.jpg';
import b_7 from '../../Images/b15.jpg';
import b_8 from '../../Images/b16.jpg';

const AutoPart = () => {
    return (
        <div>
            <div >
                <h2 className=' text-3xl font-bold py-5 text-blue-600'>SELECT AUTO PARTS BY MAKE</h2>
                <p className=' text-1xl font-bold  text-black-600 p-4'>View a selection of our most popular makes</p>
            </div>
           
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-orange-600 mx-auto'>
                <AutoParts img={b_1} name="AUDI"></AutoParts>
                <AutoParts img={b_2} name="JAGUAR"></AutoParts>
                <AutoParts img={b_3} name="MERCEDES"></AutoParts>
                <AutoParts img={b_4} name="INFINITY"></AutoParts>
                <AutoParts img={b_5} name="VOLKSWAGEN"></AutoParts>
                <AutoParts img={b_6} name="BMW"></AutoParts>
                <AutoParts img={b_7} name="CADILLAC"></AutoParts>
                <AutoParts img={b_8} name="LEXUS"></AutoParts>
            </div>
        </div>
    );
};

export default AutoPart;