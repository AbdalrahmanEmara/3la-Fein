import React from 'react';
import './Navigator.css'

const Navigator = ({ color, icon, title, text }) => (
  <button className={`navigator ${color}`}>
    <div className="icon-container">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </button>
);

export default Navigator;