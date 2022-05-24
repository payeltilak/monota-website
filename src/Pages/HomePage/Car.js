import React from 'react';

const Car = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 my-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/g99t7dy/Car.jpg" />
                    <div>
                        <h1 class="text-4xl font-bold text-blue-700">AMP JUMP STARTER W/120 PSI COMPRESSOR</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <h3 className='text-5xl font-bold'>$18.79 </h3>
                        <button class="btn btn-dark text-white my-4">Take Bundle Deals</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;