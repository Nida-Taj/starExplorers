import React from 'react';

const CustomCard = ({ title, description, imageUrl }) => {
    return (
        <div className="custom-card">
            <div className="custom-card-image">
                {}
                <img src={imageUrl} alt={title} />
            </div>
            <div className="custom-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CustomCard;

