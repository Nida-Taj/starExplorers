import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';

const ReviewForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bookingNumber, setBookingNumber] = useState('');
    const [packageUsed, setPackageUsed] = useState('');
    const [dateOfTravel, setDateOfTravel] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [step, setStep] = useState(1); // Step 1: Verification, Step 2: Review
    const [submitted, setSubmitted] = useState(false);

    const handleNextClick = () => {
        if (step === 1) {
            // Perform validation, for example:
            if (firstName.trim() === '' || lastName.trim() === '' || bookingNumber.trim() === '' || packageUsed.trim() === '' || dateOfTravel.trim() === '') {
                alert('Please fill out all fields.');
                return;
            }
            setStep(2); // Move to review section
        }
    };

    const handleStarClick = (starValue) => {
        setRating(starValue === rating ? 0 : starValue);
    };

    const handlePackageUsedChange = (event) => {
        setPackageUsed(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (rating > 0 && comment.trim() !== '') {
            alert('Review submitted.');
            setRating(0);
            setComment('');
            setSubmitted(true);
            setStep(1);
            setFirstName('');
            setLastName('');
            setBookingNumber('');
            setPackageUsed('');
            setDateOfTravel('');

        } else {
            alert('Please provide a rating and comment.');
        }
    };

    return (
        <div className="review-form2">
            {step === 1 && (
                <div>
                    <h2>Verification</h2>
                    <form>
                        <div className="form-group2">
                            <label>First Name:</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group2">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group2">
                            <label>Booking Number:</label>
                            <input
                                type="number"
                                value={bookingNumber}
                                onChange={(e) => setBookingNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group2">
                    <label>Package Used:</label>
                    <select
                        value={packageUsed}
                        onChange={handlePackageUsedChange}
                        required
                    >
                        <option value="">Select a package</option>
                        <option value="Cape">Cape Town Adventure</option>
                        <option value="Beijing">Beijing Experience</option>
                        <option value="Vienna">Vienna Getaway</option>
                        <option value="Peru">Peru Discovery</option>
                        <option value="Turkey">Turkey Escapade</option>
                    </select>
                </div>

                        <div className="form-group2">
                            <label>Date of Travel:</label>
                            <input
                                type="date"
                                value={dateOfTravel}
                                onChange={(e) => setDateOfTravel(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                    <button onClick={handleNextClick}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h2>Leave a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className='rating'>Rating:</label>
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <FaStar
                                        key={value}
                                        className={value <= rating ? 'star-selected' : 'star-unselected'}
                                        onClick={() => handleStarClick(value)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Comment:</label>
                            <textarea
                                rows="4"
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder="Write your review here..."
                                required
                            />
                        </div>
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ReviewForm;


