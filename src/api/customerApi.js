import axios from 'axios';

const API_URL = 'http://localhost:5000/api/customers/'; // Replace with your actual backend URL

// Create a new customer
export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(`${API_URL}`, customerData);
    return response.data;
  } catch (error) {
    console.error('Failed to create customer:', error);
    throw error;
  }
};

// Get customer details by userId
export const getCustomerById = async (token, userId) => {
  try {
    const response = await axios.get(`${API_URL}${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
          }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch customer:', error);
    throw error;
  }
};

// Update customer details
export const updateCustomer = async (customerId, updates) => {
  try {
    const response = await axios.put(`${API_URL}/${customerId}`, updates);
    return response.data;
  } catch (error) {
    console.error('Failed to update customer:', error);
    throw error;
  }
};

// Delete a customer
export const deleteCustomer = async (customerId) => {
  try {
    const response = await axios.delete(`${API_URL}/${customerId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete customer:', error);
    throw error;
  }
};

// Add a payment method to a customer
export const addPaymentMethod = async (customerId, paymentMethod) => {
  try {
    const response = await axios.post(`${API_URL}/${customerId}/payment-methods`, { paymentMethod });
    return response.data;
  } catch (error) {
    console.error('Failed to add payment method:', error);
    throw error;
  }
};

// Remove a payment method from a customer
export const removePaymentMethod = async (customerId, paymentMethodId) => {
  try {
    const response = await axios.delete(`${API_URL}/${customerId}/payment-methods/${paymentMethodId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to remove payment method:', error);
    throw error;
  }
};

// Add a product to the wishlist
export const addToWishlist = async (customerId, productId) => {
  try {
    const response = await axios.post(`${API_URL}/${customerId}/wishlist`, { productId });
    return response.data;
  } catch (error) {
    console.error('Failed to add to wishlist:', error);
    throw error;
  }
};

// Remove a product from the wishlist
export const removeFromWishlist = async (customerId, productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${customerId}/wishlist/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to remove from wishlist:', error);
    throw error;
  }
};

// Add a product to the cart
export const addToCart = async (customerId, productId) => {
  try {
    const response = await axios.post(`${API_URL}/${customerId}/cart`, { productId });
    return response.data;
  } catch (error) {
    console.error('Failed to add to cart:', error);
    throw error;
  }
};

// Remove a product from the cart
export const removeFromCart = async (customerId, productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${customerId}/cart/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to remove from cart:', error);
    throw error;
  }
};

// Add an order to the order history
export const addToOrderHistory = async (customerId, orderId) => {
  try {
    const response = await axios.post(`${API_URL}/${customerId}/order-history`, { orderId });
    return response.data;
  } catch (error) {
    console.error('Failed to add to order history:', error);
    throw error;
  }
};

// Remove an order from the order history
export const removeFromOrderHistory = async (customerId, orderId) => {
  try {
    const response = await axios.delete(`${API_URL}/${customerId}/order-history/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to remove from order history:', error);
    throw error;
  }
};
