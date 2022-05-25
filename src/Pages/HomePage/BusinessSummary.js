import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='p-20'>
            <h2 className='text-3xl font-bold py-10 text-pink-600'>Business Summary of Our's Company</h2>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 drop-shadow-3xl '>
                <div>
                    <h2 className='font-bold'>108K</h2> <br />
                    <p className='text-amber-500 font-bold'>Countries</p>
                </div>

                <div>
                    <h2 className='font-bold'>300K</h2> <br />
                    <p className='text-amber-500 font-bold'>Happy Clients</p>
                </div>

                <div>
                    <h2 className='font-bold'>33K</h2> <br />
                    <p className='text-amber-500 font-bold'>Total Products</p>
                </div>

                <div>
                    <h2 className='font-bold'>3.5 M</h2> <br />
                    <p className='text-amber-500 font-bold'>Total User</p>
                </div>
            </section>
        </div>
    );
};

export default BusinessSummary;