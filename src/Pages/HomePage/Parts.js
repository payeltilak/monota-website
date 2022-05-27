import React from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = ({tool}) => {
    const { _id, name, img, price, description, minimumOrder, quantity } = tool;
    const navigate = useNavigate();
    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className=''>
            <div class="card w-80 bg-blue-300 drop-shadow-2xl g-5 h-full">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-blue-600">{name}</h2>
                    <h3 className='text-1xl font-bold'>${ price}</h3>
                    <h4 className='text-1xl font-bold'>Minimum Order Quantity : <small>{minimumOrder} </small></h4>
                    <h4 className='text-1xl font-bold'>Available Quantity : <small>{quantity}</small></h4>
                    <p>{description.slice(0,100) }...</p>
                    <div class="card-actions">
                        <button onClick={()=>navigateToPurchase(_id)} class="btn btn-dark text-white my-3">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parts;