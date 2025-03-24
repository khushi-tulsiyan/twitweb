import axios from 'axios';

// Create axios instance with baseURL from environment or default to localhost
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 10000,
  withCredentials: true, // Enable credentials with requests
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const fetchTrends = async () => {
  try {
    const response = await apiClient.get('/api/trends');
    
    // The backend now wraps the trends in a 'trends' key
    if (response.data && response.data.trends) {
      return response.data.trends;
    } else {
      console.error('Unexpected API response format:', response.data);
      throw new Error('Unexpected API response format');
    }
  } catch (error) {
    console.error('API Error:', error);
    
    // Improved error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data?.error || `Server error: ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response received from server. Check your network connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || 'Unknown error occurred');
    }
  }
};
