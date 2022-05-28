import React from 'react';

const Review = ({userReview}) => {
    const {rating,review,name } = userReview;
    return (
        <div>
            <div class="card w-80 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="font-bold">{ name}</h2>
                    <p>{ review}</p>
                    <p>Rating :{rating }</p>
                </div>
            </div>
        </div>
    );
};

export default Review;