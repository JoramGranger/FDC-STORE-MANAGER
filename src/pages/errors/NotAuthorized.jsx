import React from "react";
import { Link } from "react-router-dom";
import './notAuthorized.scss';

const NotAuthorized = () => {
  return (
    <div className="not-authorized">
      <h1>403 - Not Authorized</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default NotAuthorized;
