import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
const ratingRef=useRef('')

  
    const handleAddReview = (e) => {
        e.preventDefault()
        const review = e.target.review.value
        const rating = ratingRef.current.value
        const userReview = {
            name: user.displayName,
            email: user.email,
            rating,
            review
        }
        fetch('http://localhost:5000/addreview', {
            method: "POST",
            headers: {
                authorization:`Bearer ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Thanks for review")
                console.log(data)
            })
    }

    return (
        <div className='mt-12 ml-8'>
            <form onSubmit={handleAddReview} >
                <textarea name='review' className="textarea textarea-bordered" placeholder="Please insert your review"></textarea>
                <input ref={ratingRef} type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                <input type="submit" value='Add Review' className="input input-bordered w-full max-w-xs btn btn-primary" />
            </form>
        </div>
    );
};

export default AddReview;