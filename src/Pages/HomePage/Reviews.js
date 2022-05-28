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
            <h2 className='font-bold text-3xl py-10'>Review</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8'>
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