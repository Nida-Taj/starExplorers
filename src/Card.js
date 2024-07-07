import React from 'react';
import './index.css';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="card-button">View Details</button>
            </div>
        </div>
    );
}

export default Card;