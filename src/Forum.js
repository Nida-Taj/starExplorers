// Forum.js (Community Forum page)
import React, { useState } from 'react';
import './index.css';
import Review from './Review'; // Assuming Review component is for displaying reviews only

const Forum = () => {
    const [reviews, setReviews] = useState([]);
    const [packageFilter, setPackageFilter] = useState('');
    const [starFilter, setStarFilter] = useState('');

    return (
        <div className="forum">
            <h2>Community Forum</h2>
            <div className="form-group6">
                            <label>Filter:</label>
                            <select className="packageSelect"
                                value={packageFilter}
                                onChange={(e) => setPackageFilter(e.target.value)}
                                required
                            >
                                <option value="">Package</option>
                                <option value="Package A">Cape Town Adventure</option>
                                <option value="Package B">Beijing Experience</option>
                                <option value="Package C">Vienna Getaway</option>
                                <option value="Package D">Peru Discovery</option>
                                <option value="Package E">Turkey Escapade</option>
                            </select>
                            <select className= "starSelect"
                                value={starFilter}
                                onChange={(e) => setStarFilter(e.target.value)}
                                required
                            >
                                <option value="">Rating</option>
                                <option value="Star A">1 Star</option>
                                <option value="Star B">2 Star</option>
                                <option value="Star C">3 Star</option>
                                <option value="Star D">4 Star</option>
                                <option value="Star E">5 Star</option>
                            </select>
                        </div>
                        
            <div className="reviews">
                {reviews.length === 0 ? <p>No reviews yet.</p> : (
                    reviews.map((review, index) => (
                        <Review key={index} review={review} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Forum;




