import axios from 'axios';

// Modify the baseURL as needed to point to your backend API.
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 10000
});

export const fetchTrends = async () => {
  try {
    const response = await apiClient.get('/api/trends');
    // Assume the response contains an object with a trends array.
    return response.data.trends;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch trends');
  }
};
