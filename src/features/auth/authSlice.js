import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// login slice
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// change password slice
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
      try {
          const response = await axios.post('/api/auth/change-password', {
              currentPassword,
              newPassword,
          });
          return response.data;
      } catch (error) {
          return rejectWithValue(error.response.data);
      }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem('token'),
    username: '',
    password: '',
    email: '',
    validationErrors: {},
    token: localStorage.getItem('token') || null, // Initialize token from local storage
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
    clearValidationErrors: (state) => {
      state.validationErrors = {};
    }
  },
  extraReducers: (builder) => {
    builder
    /* login */
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.validationErrors = {};
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.validationErrors = action.payload.errors || {};
        } else {
          state.error = action.error.message;
        }
      })
        /* changepassword */
        // other extra reducers
        .addCase(changePassword.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
          state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
      });
  },
});

export const { logout, setUsername, setEmail, setPassword, setValidationErrors, clearValidationErrors } = authSlice.actions;
export default authSlice.reducer;
