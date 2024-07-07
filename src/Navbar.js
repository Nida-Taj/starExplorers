import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">
            <h1>Star Explorers</h1>

            </Link>
            <div className="links">
                <Link to="/packages">Packages</Link>
                <Link to="/amenities"> Local Amenities</Link>
                <Link to="/forum">Community Forum</Link>
                <Link to="/review">Leave a Review</Link>
                <Link to="/book">Book Now</Link>
            </div>
        </nav>


     );
}
 
export default Navbar ;