/* eslint-disable no-constant-binary-expression */
import axios from 'axios';
import { showSnackbar } from '../Utils/snackbarUtil';

// Axios client setup
const AxiosClient = async ({ toolkit, headers = {}, responseType, ...rest }) => {
  return axios({
    baseURL: "https://hgc06pjf1l.execute-api.ap-south-1.amazonaws.com/dev" || '', // Use Vite's environment variables for the API base URL
    responseType,
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage?.getItem('accessToken')}` || '', // Bearer token
      ...headers,
    },
  })
    .then((response) => toolkit.fulfillWithValue(response.data)) // Return success
    .catch((error) => toolkit.rejectWithValue(error.response?.data)); // Handle error
};

// Global Axios interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    showSnackbar(error.response?.data?.message || "Something went wrong!","error",2000)
    // toast.error(error.response?.data?.message || 'Something went wrong!', {
    //   position: 'top-right',
    // });

    // Handle unauthorized (401) errors
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken'); // Remove the token on unauthorized errors
      localStorage.removeItem('auth');
      window.location.href = '/'; // Redirect to login
    }

    return Promise.reject(error.response?.data?.message || 'Something went wrong');
  }
);

export default AxiosClient;