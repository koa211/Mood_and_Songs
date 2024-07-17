import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5173/', // Replace with your backend API base URL
    timeout: 10000, // Timeout after 10 seconds
    headers: {
        'Content-Type': 'application/json',
        // Add any headers needed for your backend
    },
});