// AccountSettings.jsx
import React, { useState } from 'react';

const AccountSettings = () => {
  const [newEmail, setNewEmail] = useState("");

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleUpdateEmail = () => {
    // Handle updating email logic here
    console.log("Update Email:", newEmail);
  };

  return (
    <div>
      <h2>Account Settings</h2>
      <p>Change Password</p>
      <div>
        <label htmlFor="email">New Email:</label>
        <input type="email" id="email" value={newEmail} onChange={handleEmailChange} />
        <button onClick={handleUpdateEmail}>Update Email</button>
      </div>
    </div>
  );
}

export default AccountSettings;
