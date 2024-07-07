// LocalAmenitiesFilter.js

import React from 'react';

const LocalAmenitiesFilter = ({ selectedAmenities, onChange }) => {
  const amenitiesOptions = {
    "Rest Stops": [
      'Rest Stops',
      'Hotels',
      'Vacation Rentals',
      'Hostel',
      'Homestays'
    ],
    "Food": [
      'Restaurants',
      'Bars',
      'Bakeries',
      'Cafes'
    ],
    "Shopping": [
      'Local Markets',
      'Grocery',
      'Malls',
      'Souvenirs'
    ]
  };

  return (
    <div>
      <label>Filter by Local Amenities:</label>
      <select
        multiple
        value={selectedAmenities}
        onChange={(e) => onChange(Array.from(e.target.selectedOptions, option => option.value))}
      >
        {Object.keys(amenitiesOptions).map((category, index) => (
          <optgroup key={index} label={category}>
            {amenitiesOptions[category].map((amenity, index) => (
              <option key={index} value={amenity}>{amenity}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default LocalAmenitiesFilter;
