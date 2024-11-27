import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with your actual API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const userDataJson = localStorage.getItem('user_Data');
    const userData = JSON.parse(userDataJson);
    const token = userData?.access_token;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Set headers for multipart/form-data requests
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    // Set accept header for all requests
    config.headers['Accept'] = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Return successful response data
    if (response.status === 200 || response.status === 201) {
      return response;
    }
  },
  async (error) => {
    const { status } = error.response || {};
    const message = error.response?.data?.error;

    if (status === 401) {
      throw error;
    } else if ([400, 403, 404, 409].includes(status)) {
      let errorMessage = 'An error occurred. Please try again.';
      switch (status) {
        case 400:
          errorMessage = message || 'Bad Request. Please check the input and try again.';
          break;
        case 403:
          errorMessage = message || 'Forbidden. You do not have permission to access this resource.';
          break;
        case 404:
          errorMessage = message || 'Not Found. The requested resource could not be found.';
          break;
        case 409:
          errorMessage = message || 'Conflict. There was a conflict with your request.';
          break;
        default:
          break;
      }
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else {
      toast.error('An internal server error occurred. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
