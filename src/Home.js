import React from 'react';
import './index.css';
import Card from './Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <div className="overlaycontainer">
                <img src="/images/homepage-beach.jpg" alt="Homepage Beach" />
                <div className="overlay"></div>
                <div className="text-overlay">
                    <h1>Your Next Vacation Just a Click Away</h1>
                </div>
                <div className="text-blurb">
                    Find your dream vacation today, with a variety of packages, and great deals!
                </div>
                <Link to="/packages">
                    <button className="button">View Packages</button>
                </Link>

            </div>
            <div className="mostVisited"><h1>Most Visited</h1></div>

            <div className="cards">
                <Card
                    title="Cape Town"
                    description="Discover Cape Town’s blend of natural beauty and cultural richness with our curated travel package. Explore iconic landmarks such as Table Mountain and Robben Island, savor diverse cuisine, and immerse yourself in the city’s vibrant arts and music scene."
                    imageUrl="/images/CapeTown4.jpg"
                />
                <Card
                    title="Beijing"
                    description="Immerse yourself in Beijing's rich history and modern vibrancy with our curated travel package. Explore iconic landmarks like the Great Wall and Forbidden City, and experience the city's unique blend of tradition and innovation."
                    imageUrl="/images/Beijing.jpg"
                />
                <Card
                    title="Vienna"
                    description="Experience Vienna's imperial grandeur and artistic legacy with our curated travel package. Discover opulent palaces, renowned museums, classical music concerts, and the city's charming coffeehouse culture."
                    imageUrl="/images/Vienna.jpg"
                />
            </div>
        </div>
     );
}

export default Home;

;