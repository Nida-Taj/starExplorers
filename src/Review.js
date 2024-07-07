
import React, { useState } from 'react';
import Review from './Review';
import './index.css';

const Forum = () => {
    const [reviews, setReviews] = useState([]);

    const handleReviewSubmit = (review) => {
        setReviews([...reviews, review]);
    };

    return (
        <div className="forum">
            <h2>Community Forum</h2>
            <div className="reviews">
                {reviews.length === 0 && <p>No reviews yet.</p>}
                {reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Forum;



