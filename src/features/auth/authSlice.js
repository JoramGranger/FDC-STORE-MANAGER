import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// login slice
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
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
    user: null,
    loading: false,
    error: null,
    username: '',
    password: '',
    validationErrors: {},
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
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
        state.user = action.payload;
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
      .addCase(changePassword.fulfilled, (state, action) => {
          state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
      });
  },
});

export const { logout, setUsername, setPassword, setValidationErrors } = authSlice.actions;
export default authSlice.reducer;
