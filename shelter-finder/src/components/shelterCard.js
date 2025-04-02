import React from 'react';

const ShelterCard = ({ shelter }) => {
    return (
        <div className="shelter-card">
            <h2>{shelter.name}</h2>
            <p><strong>Address:</strong> {shelter.address}</p>
            <p><strong>Contact:</strong> {shelter.contact}</p>
            <p><strong>Capacity:</strong> {shelter.capacity}</p>
            <p><strong>Services:</strong> {shelter.services.join(', ')}</p>
        </div>
    );
};

export default ShelterCard;