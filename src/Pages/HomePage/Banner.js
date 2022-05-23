import React from 'react';
import image_2 from '../../Images/image-2.jpg'
import image_1 from '../../Images/image-1.jpg'


const Banner = () => {
    return (
        <div>
            <div class="carousel w-full ">
                <div id="item1" class="carousel-item w-full">
                    <img src={image_2} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={image_1} class="w-full" />
                </div>
                
               
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
               
                
            </div>
        </div>
    );
};

export default Banner;