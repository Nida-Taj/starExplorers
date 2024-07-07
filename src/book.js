import React, { useState } from 'react';
import './index.css'; // Assuming you have a separate CSS file for the form styles

const BookNow = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfDeparture, setDateOfDeparture] = useState('');
    const [dateOfReturn, setDateOfReturn] = useState('');
    const [packageUsed, setPackageUsed] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [customAmenities, setCustomAmenities] = useState([{ name: '' }]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const accommodations = [
         "Hotels", "Vacation Rentals", "Hostels", "Homestays"
    ];

    const food = [
        "Restaurants", "Bars", "Bakeries", "Cafes"
    ];

    const shopping = [
        "Local Markets", "Grocery Stores", "Malls", "Souvenir Shops"
    ];
    const progressSteps = [
        { title: 'Personal Information' },
        { title: 'Select Package & Amenities' },
        { title: 'Customize Amenities' }
    ];

    const handleNext = (event) => {
        event.preventDefault();
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedAmenities.length >= 1) {
            alert('Booking Successful!');
            // Reset form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setDateOfDeparture('');
            setDateOfReturn('');
            setPackageUsed('');
            setSelectedAmenities([]);
            setCustomAmenities([{ name: '' }]);
            setStep(1);
        } else {
            alert('Please select up to 3 amenities.');
        }
    };
    const handleConfirmation = () => {
        setShowConfirmation(false); // Hide confirmation
        alert('Booking Successful!');
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDateOfDeparture('');
        setDateOfReturn('');
        setPackageUsed('');
        setSelectedAmenities([]);
        setCustomAmenities([{ name: '' }]);
        setStep(1);
    };


    const handleAmenityChange = (event) => {
        const amenity = event.target.value;
        if (event.target.checked) {
            setSelectedAmenities([...selectedAmenities, amenity]);
        } else {
            setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
        }
    };

    const handleCustomAmenityChange = (index, event) => {
        const newCustomAmenities = [...customAmenities];
        newCustomAmenities[index].name = event.target.value;
        setCustomAmenities(newCustomAmenities);
    };

    const handleAddCustomAmenity = () => {
        setCustomAmenities([...customAmenities, { name: '' }]);
    };

    const handleRemoveCustomAmenity = (index) => {
        const newCustomAmenities = customAmenities.filter((_, i) => i !== index);
        setCustomAmenities(newCustomAmenities);
    };

    return (
        <div className="book-now">
            <div className="progress-bar">
                {progressSteps.map((stepItem, index) => (
                    <div key={index} className={`step ${step > index + 1 ? 'completed' : step === index + 1 ? 'active' : ''}`}>
                        {stepItem.title}
                    </div>
                ))}
            </div>
            <div className="form-container">
                {step === 1 && (
                    <form onSubmit={handleNext}>
                        <h2>Personal Information</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Date of Departure:</label>
                                <input
                                    type="date"
                                    value={dateOfDeparture}
                                    onChange={(e) => setDateOfDeparture(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Date of Return:</label>
                                <input
                                    type="date"
                                    value={dateOfReturn}
                                    onChange={(e) => setDateOfReturn(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-buttons2">
                            <button type="submit">Next</button>
                        </div>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleNext}>
                        <h2>Select Package & Amenities</h2>
                        <div className="form-group5">
                            <label>Package Used:</label>
                            <select
                                value={packageUsed}
                                onChange={(e) => setPackageUsed(e.target.value)}
                                required
                            >
                                <option value="">Select a package</option>
                                <option value="Package A">Cape Town Adventure</option>
                                <option value="Package B">Beijing Experience</option>
                                <option value="Package C">Vienna Getaway</option>
                                <option value="Package D">Peru Discovery</option>
                                <option value="Package E">Turkey Escapade</option>
                            </select>
                        </div>
                        <div className="form-group5">
                            <label>Accommodations:</label>
                            {accommodations.map((amenity, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        value={amenity}
                                        checked={selectedAmenities.includes(amenity)}
                                        onChange={handleAmenityChange}
                                    />
                                    <label>{amenity}</label>
                                </div>
                            ))}
                        </div>
                        <div className="form-group5">
                            <label>Food:</label>
                            {food.map((amenity, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        value={amenity}
                                        checked={selectedAmenities.includes(amenity)}
                                        onChange={handleAmenityChange}
                                    />
                                    <label>{amenity}</label>
                                </div>
                            ))}
                        </div>
                        <div className="form-group5">
                            <label>Shopping:</label>
                            {shopping.map((amenity, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        value={amenity}
                                        checked={selectedAmenities.includes(amenity)}
                                        onChange={handleAmenityChange}
                                    />
                                    <label>{amenity}</label>
                                </div>
                            ))}
                        </div>
                        <div className="form-buttons2">
                            <button type="button" onClick={handleBack}>Back</button>
                            <button type="submit">Next</button>
                        </div>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <h2>Customize Amenities</h2>
                        <div className="form-group5">
                            <label>Custom Amenities:</label>
                            {customAmenities.map((amenity, index) => (
                                <div key={index} className="custom-amenity-row">
                                    <input
                                        type="text"
                                        placeholder={`Custom Amenity ${index + 1}`}
                                        value={amenity.name}
                                        onChange={(e) => handleCustomAmenityChange(index, e)}
                                    />
                                    <button type="button" onClick={() => handleRemoveCustomAmenity(index)}>Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddCustomAmenity}>Add Custom Amenity</button>
                        </div>
                        <div className="form-buttons2">
                            <button type="button" onClick={handleBack}>Back</button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
                {showConfirmation && (
                    <div className="confirmation">
                        <h2>Confirmation</h2>
                        <p><strong>Name:</strong> {firstName} {lastName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone Number:</strong> {phoneNumber}</p>
                        <p><strong>Date of Departure:</strong> {dateOfDeparture}</p>
                        <p><strong>Date of Return:</strong> {dateOfReturn}</p>
                        <p><strong>Package Used:</strong> {packageUsed}</p>
                        <p><strong>Selected Amenities:</strong> {selectedAmenities.join(', ')}</p>
                        {customAmenities.length > 0 && (
                            <p><strong>Custom Amenities:</strong> {customAmenities.map((amenity, index) => (
                                <span key={index}>{amenity.name}{index !== customAmenities.length - 1 ? ', ' : ''}</span>
                            ))}</p>
                        )}
                        <div className="form-buttons2">
                            <button type="button" onClick={handleConfirmation}>Confirm Booking</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookNow;