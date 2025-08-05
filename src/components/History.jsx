import React from 'react';
import './History.css';

const History = () => {
  const trips = [
    {
      id: 1,
      title: 'Venice, Rome & Milan Tour',
      price: '$225.4',
      checkIn: 'May 15, 2024',
      checkOut: 'May 18, 2024',
      image: '/images/venice.png',
      type: 'restaurant'
    },
    {
      id: 2,
      title: 'Venice, Rome & Milan Tour',
      price: '$225.4',
      checkIn: 'May 15, 2024',
      checkOut: 'May 18, 2024',
      image: '/images/venice.png',
      type: 'snorkeling'
    },
    {
      id: 3,
      title: 'Venice, Rome & Milan Tour',
      price: '$225.4',
      checkIn: 'May 15, 2024',
      checkOut: 'May 18, 2024',
      image: '/images/venice.png',
      type: 'experienced trip'
    }
  ];

  return (
    <div className="history-container">
      <h2>My History</h2>
      {trips.map((trip) => (
        <div key={trip.id} className="trip-card">
          <img src={trip.image} alt={trip.title} className="trip-image" />
          <div className="trip-details">
            <div className="trip-info">
              <h3>{trip.title}</h3>
              <span className={`trip-type ${trip.type.replace(' ', '-')}`}>{trip.type.charAt(0).toUpperCase() + trip.type.slice(1)}</span>
              <p>Check-in: {trip.checkIn} | Check-out: {trip.checkOut}</p>
              <p className="trip-price">{trip.price}</p>
            </div>
            <button className="detail-btn">Detail</button>
          </div>
        </div>
      ))}
      <button className="show-reviews">Show all reviews</button>
    </div>
  );
};

export default History;