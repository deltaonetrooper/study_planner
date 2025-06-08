import axios from 'axios';

export const registerUser = async (username, email, password1, password2) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/auth/registration/',
      {
        username,
        email,
        password1,
        password2,
      },

      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('User registered:', response.data);
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
  }
};


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/auth/login/',
      { email, password },
      {
        withCredentials: true, 
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('User logged in:', response.data);
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
  }
};