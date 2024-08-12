// src/api/cartApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/carts/';

// Create a new cart
export const createCart = async (cartData, token) => {
  try {
    const response = await axios.post(API_URL, cartData, {
      headers: {
        /* 'Content-Type': 'application/json', */
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
};

// Get cart details for a specific user
export const getCart = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting cart:', error);
    throw error;
  }
};

// Update an item in the cart
export const updateCartItem = async (userId, productId, quantity, token) => {
  try {
    const response = await axios.put(`${API_URL}${userId}/update/${productId}`, { quantity }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

// Clear the cart
export const clearCart = async (userId, token) => {
  try {
    const response = await axios.delete(`${API_URL}${userId}/clear`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

// Remove a specific item from the cart
export const removeCartItem = async (userId, productId, token) => {
  try {
    const response = await axios.delete(`${API_URL}${userId}/remove/${productId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error removing cart item:', error);
    throw error;
  }
};
