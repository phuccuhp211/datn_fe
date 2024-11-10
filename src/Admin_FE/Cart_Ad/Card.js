import React from 'react';
import './Card.css';

function Card({ title, subtitle, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a href="#">Chi tiết -> </a>
    </div>
  );
}

export default Card;
