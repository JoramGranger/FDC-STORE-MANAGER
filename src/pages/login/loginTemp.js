import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, setUsername, setPassword, setValidationErrors } from '../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { user, loading, error, username, password, validationErrors } = useSelector((state) => state.auth);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    if (Object.keys(errors).length > 0) {
      dispatch(setValidationErrors(errors));
    } else {
      dispatch(login({ username, password }));
    }
  };

  if (user && user.isAdmin) {
    history.push('/admin');
  }

  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="title">LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          {validationErrors.username && <p className="error">{validationErrors.username}</p>}
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          {validationErrors.password && <p className="error">{validationErrors.password}</p>}
          <button type="submit" disabled={loading}>LOGIN</button>
          <p>DO NOT REMEMBER YOUR PASSWORD</p>
          <p>CREATE A NEW ACCOUNT</p>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
