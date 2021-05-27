import React from 'react';
import "../components/Card.css";

const Card = ({img,heading}) => {
    return (
        <div className="card">
            <img src={img} alt="card__img" />
            <h3>{heading}</h3>
        </div>
    )
}

export default Card;
