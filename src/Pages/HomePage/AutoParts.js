import React from 'react';
import b_1 from '../../Images/b1.jpg';


const AutoParts = ({img,name}) => {
    return (
        
           
            <div>

                <div class="card w-80 bg-base-100 drop-shadow-2xl ">
                    <div class="card-body">
                        <h2 class="card-title text-2xl font-bold">{name}</h2>

                    </div>
                    <figure><img src={img} alt="Shoes" /></figure>
                </div>
            </div>
    
        
    );
};

export default AutoParts;