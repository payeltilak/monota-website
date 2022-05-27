import React from 'react';



const AutoParts = ({img,name}) => {
    return (
        
           
            <div>

            <div class="card w-80 bg-cyan-800 drop-shadow-2xl ">
                    <div class="card-body">
                        <h2 class="card-title text-2xl font-bold">{name}</h2>

                    </div>
                    <figure><img src={img} alt="" /></figure>
                </div>
            </div>
    
        
    );
};

export default AutoParts;