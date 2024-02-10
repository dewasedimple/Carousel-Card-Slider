import React from 'react';
import './Doctor.css'; // Import CSS file for Doctor component

const Mycard = ({ imageUrl, title, description }) => {
    return (
        <div className="mycard">
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Mycard;
