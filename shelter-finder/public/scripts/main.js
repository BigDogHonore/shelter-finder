// This file contains the main JavaScript code for the website. It handles user interactions, fetches data from the API, and updates the DOM accordingly.

document.addEventListener('DOMContentLoaded', () => {
    const shelterList = document.getElementById('shelter-list');

    const fetchShelters = async () => {
        try {
            const response = await fetch('https://api.example.com/shelters'); // Replace with actual API endpoint
            const shelters = await response.json();
            displayShelters(shelters);
        } catch (error) {
            console.error('Error fetching shelters:', error);
        }
    };

    const displayShelters = (shelters) => {
        shelterList.innerHTML = '';
        shelters.forEach(shelter => {
            const shelterCard = createShelterCard(shelter);
            shelterList.appendChild(shelterCard);
        });
    };

    const createShelterCard = (shelter) => {
        const card = document.createElement('div');
        card.className = 'shelter-card';
        card.innerHTML = `
            <h3>${shelter.name}</h3>
            <p>${shelter.address}</p>
            <p>Contact: ${shelter.contact}</p>
        `;
        return card;
    };

    fetchShelters();
});