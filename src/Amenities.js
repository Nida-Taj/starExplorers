import './index.css';
import React, { useState } from 'react';
import CustomCard from './CustomCard';

const Amenities = () => {
    const [selectedCategory, setSelectedCategory] = useState('Accommodations');
    const [amenities] = useState({
        "Accommodations": [
            { title: 'Hotel', description: 'Luxurious accommodations for your stay', imageUrl: '/images/Hotel1.jpg' },
            { title: 'Vacation Rental', description: 'Comfortable homes away from home', imageUrl: '/images/VacayRental.jpg' },
            { title: 'Hostel', description: 'Budget-friendly lodging options', imageUrl: '/images/Hostel.jpg' },
            { title: 'Homestay', description: 'Immerse yourself in local culture', imageUrl: '/images/HomeStay.jpg' }
        ],
        "Food": [
            { title: 'Restaurant', description: 'Delicious dining experiences', imageUrl: '/images/Restaurant.jpg' },
            { title: 'Bar', description: 'Relaxing spots for drinks and socializing', imageUrl: '/images/Bar.jpg' },
            { title: 'Bakery', description: 'Freshly baked goods and treats', imageUrl: '/images/Bakery.jpg' },
            { title: 'Cafe', description: 'Casual spots for coffee and snacks', imageUrl: '/images/Cafe.jpg' }
        ],
        "Shopping": [
            { title: 'Local Market', description: 'Explore local crafts and goods', imageUrl: '/images/LocalMarket.jpg' },
            { title: 'Grocery Store', description: 'Convenient shopping for essentials', imageUrl: '/images/Grocery.jpg' },
            { title: 'Mall', description: 'Retail therapy and entertainment', imageUrl: '/images/mall.jpg' },
            { title: 'Souvenir', description: 'Take home memories of your trip', imageUrl: '/images/Souvenir.jpg' }
        ]
    });
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="amenities-container">
            <div className="sidebar">
                <h2>All Available Amenities:</h2>
                <div className="all-amenities">
                    {Object.keys(amenities).map((category) => (
                        <div key={category}>
                            <h3>{category}</h3>
                            {amenities[category].map((amenity, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value={amenity.title}
                                        checked={selectedCategory === category && selectedCategory === amenity.title}
                                        onChange={handleCategoryChange}
                                    />
                                    {amenity.title}
                                </label>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="content2">
                <h2>Selected Category: {selectedCategory}</h2>
                <div className="selected-cards">
                    {amenities[selectedCategory] && amenities[selectedCategory].map((amenity, index) => (
                        <div key={index} className="custom-card2">
                            <CustomCard title={amenity.title} description={amenity.description} imageUrl={amenity.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Amenities;