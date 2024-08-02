import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Get user profile
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting profile:', error);
    throw error;
  }
};

// Update user profile
export const updateProfile = async (userData, token) => {
  try {
    const response = await axios.put(`${API_URL}profile`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

// Request password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_URL}password-reset/request`, { email });
    return response.data;
  } catch (error) {
    console.error('Error requesting password reset:', error);
    throw error;
  }
};

// Reset password
export const resetPassword = async (resetData) => {
  try {
    const response = await axios.post(`${API_URL}password-reset/reset`, resetData);
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

// Verify email
export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(`${API_URL}verify/${token}`);
    return response.data;
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
};

// Upload avatar
export const uploadAvatar = async (formData, token) => {
  try {
    const response = await axios.post(`${API_URL}upload-avatar`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading avatar:', error);
    throw error;
  }
};

// Deactivate user
export const deactivateUser = async (token) => {
  try {
    const response = await axios.post(`${API_URL}deactivate`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error deactivating user:', error);
    throw error;
  }
};

// Reactivate user
export const reactivateUser = async (email) => {
  try {
    const response = await axios.post(`${API_URL}reactivate`, { email });
    return response.data;
  } catch (error) {
    console.error('Error reactivating user:', error);
    throw error;
  }
};

// Fetch all users
export const getAllUsers = async (token) => {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  };
  
  // Fetch single user by ID
  export const getUserById = async (token, userId) => {
    const response = await axios.get(`${API_URL}/${userId}`, {
      headers: { 
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  };
