import React from 'react';
import { useQuery } from 'react-query';
import Review from './Review';
import Loading from './Shared/Loading';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery("reviews", () => fetch("https://blooming-ridge-15551.herokuapp.com/reviews").then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    function reverseArr(input) {
        let reversed = []
        for (var i = input.length - 1; i >= 0; i--) {
            reversed.push(input[i]);
        }
        return reversed;
    }
    const reverseResult = reverseArr(reviews)
    const result = reverseResult.slice(0, 6)

    return (
        <div>
            <h2>review={reviews.length}</h2>
            <div>
                {
                    result.slice(-result.length).map(review => <Review
                    key={review._id} userReview={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;