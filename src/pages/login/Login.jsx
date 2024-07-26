import React, {useEffect } from "react";
import './login.scss'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login, setPassword, setEmail, setValidationErrors, setUsername } from "../../features/auth/authSlice";

const Login = () => {

    // initials
    const { user, loading, error, email, username, password, validationErrors } = useSelector((state) => state.auth); 
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // login 
    const handleLogin = (e) => {
        e.preventDefault();
        const errors = {};
        if (!email) errors.email = 'email is required';
        if (!password) errors.password = 'Password is required';
        if (Object.keys(errors).length > 0) {
          dispatch(setValidationErrors(errors));
          console.log(user)
        } else {
          dispatch(login({ email, password }));
        }
    };

    //  admin
    useEffect(() => {
      console.log(user);
      if (user && user.role === 'admin') {
        navigate('/dashboard')
      }
    else {
      navigate('/login')
    }

    }, [user, navigate]);

    return (
        <div className="login">
          <div className="wrapper">
            <h1 className="title">LOGIN</h1>
            <form onSubmit={handleLogin}>
              <input 
                type="text" 
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
              {validationErrors.email && <p className="error">{validationErrors.email}</p>}
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
              {validationErrors.password && <p className="error">{validationErrors.password}</p>}
              <button type="submit" disabled={loading}>
                {loading ? <div className="loader" /> : 'LOGIN'}
              </button>
              <p>DO NOT REMEMBER YOUR PASSWORD</p>
              {/* <p>CREATE A NEW ACCOUNT</p> */}
              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </div>        
    )
}

export default Login;