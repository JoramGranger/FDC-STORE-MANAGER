import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders/';

// Create an order from the cart
export const createOrderFromCart = async (userId, orderData, token) => {
  try {
    const response = await axios.post(`${API_URL}${userId}`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating order from cart:', error);
    throw error;
  }
};

// Update an order status
export const updateOrderStatus = async (orderId, status, token) => {
  try {
    const response = await axios.put(`${API_URL}${orderId}/update`, { status }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

// Get all orders (admin access)
export const getAllOrders = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting all orders:', error);
    throw error;
  }
};

// Get all orders for a specific customer
export const getOrdersByCustomer = async (userId, token) => {
  try {
    const response = await axios.get(`${API_URL}my/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting orders by customer:', error);
    throw error;
  }
};

export const getOrderById = async (orderId, token) => {
  try {
    const response = await axios.get(`${API_URL}${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting orders:', error);
    throw error;
  }
};
