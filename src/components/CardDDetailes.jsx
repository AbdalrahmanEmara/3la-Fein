import React from 'react'
import './CardDDetails.css'
import img from '../images/tourcard.png'

const CardDDetailes = ({ onClose }) => {
    return (
    <div className="overlay">
        <div className="card-container">
            <button type="button" class="btn-close close-btn" aria-label="Close" onClick={onClose}></button>

            <div className="card-content">
            {/* Left */}
            <div className="card-left">
                <div className='title'>
                    <span className="badge">Restaurants</span>
                    <h2>Venice, Rome & Milan</h2>
                </div>
                <div className='info bb d-flex justify-content-between mb-2'>
                    <p> Location</p>
                    <p>⭐ 4.9 (1.2k)</p>
                </div>

                <div className='info bb d-flex justify-content-between mb-2'>
                    <p className="status"> Opened</p>
                    <p>Sunday - Thursday</p>
                </div>

                <div className='info d-flex justify-content-between mb-2'>
                    <p> Distance from your location</p>
                    <p className='kelo'>10km</p>
                </div>
                <div className="offer">Now’s the time, amazing OFFER inside!</div>
                <button className="book-btn my-1 w-100">Book now</button>
            </div>

            {/* Right */}
            <div className="card-right">
                <img src={img} />
            </div>
            </div>
        </div>
        </div>
  );
};

export default CardDDetailes