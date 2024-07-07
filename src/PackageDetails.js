import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useHistory } from 'react-router-dom';
import './index.css';

const PackageDetails = ({ location }) => {
    const { package: pkg } = location.state;
    const history = useHistory();

    return (
        <div className="package-details-container">
            <div className="package-details">
                <div className="carousel-container">
                    <Carousel>
                        {pkg.imageUrls.map((url, index) => (
                            <div key={index}>
                                <img src={url} alt={pkg.title} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="details-container">
                    <h2>{pkg.title}</h2>
                    <p>{pkg.description}</p>
                    <p className="package-price">{pkg.price}</p>
                    <button onClick={() => history.push('/packages')} className="back-button">Go Back</button>
                    <button className="book-button">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
