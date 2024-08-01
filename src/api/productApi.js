// src/api/productApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products/';

// Create a new product
export const createProduct = async (productData, token) => {
  console.log('Token:', token);
  try {
    const response = await axios.post(API_URL, productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      } 
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.error('Error creating product:', error);
    throw error;
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    /* console.log(response.data); */
    return response.data;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
};

// Get a single product by ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting product by ID:', error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (productId, productData, token) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, productData, 
      { 
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        } 
      });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (productId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
  });
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Search for products
export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

// Get products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error getting products by category:', error);
    throw error;
  }
};

// Update product stock
export const updateProductStock = async (productId, stock) => {
  try {
    const response = await axios.patch(`${API_URL}/${productId}/stock`, { stock }, 
      { headers: { 'Content-Type': 'application/json' } });
    return response.data;
  } catch (error) {
    console.error('Error updating product stock:', error);
    throw error;
  }
};
