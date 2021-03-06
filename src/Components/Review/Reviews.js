import React, { useState } from 'react';
import { useEffect } from 'react';
import Review from './Review';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(data => data.json())
            .then(res => setReview(res))
    }, [])
    return (
        <div className='text-center'>
            <h4>My Happy customers Review</h4>
            <div className='reviews-container'>
            {
                review.map(review => <Review key={review.id} oneReview={review}></Review>)
            }
            </div>
        </div>
    );

};

export default Reviews;