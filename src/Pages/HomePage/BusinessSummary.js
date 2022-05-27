import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='p-20'>
            <h2 className='text-3xl font-bold py-10 text-pink-600'>Business Summary of Our's Company</h2>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 drop-shadow-3xl gap-10 '>
                <div className='bg-green-300'>
                    <h2 className='font-bold text-5xl'>108K</h2> <br />
                    <p className='text-amber-500 font-bold text-2xl'>Countries</p>
                </div>

                <div className='bg-violet-300'>
                    <h2 className='font-bold text-5xl'>400K</h2> <br />
                    <p className='text-amber-500 font-bold text-2xl'>Happy Clients</p>
                </div>

                <div className='bg-teal-300'>
                    <h2 className='font-bold text-5xl'>33K</h2> <br />
                    <p className='text-amber-500 font-bold text-2xl'>Total Products</p>
                </div>

                <div className='bg-pink-300'>
                    <h2 className='font-bold text-5xl'>3.5 M</h2> <br />
                    <p className='text-amber-500 font-bold text-2xl'>Total User</p>
                </div>
            </section>
        </div>
    );
};

export default BusinessSummary;