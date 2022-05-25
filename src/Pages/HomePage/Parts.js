import React from 'react';

const Parts = ({tool}) => {
    const { name, img, price, description, minimumOrderQuantity, availableQuantity } = tool;
    return (
        <div className=''>
            <div class="card w-80 bg-blue-300 drop-shadow-2xl g-5 h-full">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-blue-600">{name}</h2>
                    <h3 className='text-1xl font-bold'>${ price}</h3>
                    <h4 className='text-1xl font-bold'>Minimum Order Quantity : <small>{minimumOrderQuantity} </small></h4>
                    <h4 className='text-1xl font-bold'>Available Quantity : <small>{availableQuantity}</small></h4>
                    <p>{description }</p>
                    <div class="card-actions">
                        <button class="btn btn-dark text-white my-3">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parts;