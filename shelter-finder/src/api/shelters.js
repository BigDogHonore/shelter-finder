import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/shelters';

export const fetchShelters = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching shelters:', error);
        throw error;
    }
};

export const getShelterDetails = async (shelterId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${shelterId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shelter details:', error);
        throw error;
    }
};