import React, { useState } from "react";
import './profile.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from "../../features/auth/authSlice";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // State for password change form
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
    const [error, setError] = useState("");

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setError("New passwords do not match");
            return;
        }
        dispatch(changePassword({ currentPassword, newPassword }))
            .then((response) => {
                if (response.error) {
                    setError(response.error.message);
                } else {
                    setShowChangePasswordForm(false);
                }
            });
    };

    return (
        <div className="profile">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Profile</h1>
                        <img 
                            src="https://clabane.com/cdn/shop/products/Clabane-Organics-Acne-Bar-2.jpg?v=1674058736&width=360" 
                            alt="item"
                            className="profileImg" 
                        />
                        <div className="details">
                            <p className="profileItem">
                                <span className="profileKey">Username:</span>
                                <span className="profileValue">{user && user.username}</span>
                            </p>
                            <p className="profileItem">
                                <span className="profileKey">Name:</span>
                                <span className="profileValue">{user && user.username}</span>
                            </p>
                            <p className="profileItem">
                                <span className="profileKey">Email:</span>
                                <span className="profileValue">{user && user.email}</span>
                            </p>
                            <p className="profileItem">
                                <span className="profileKey">UserId:</span>
                                <span className="profileValue">{user && user._id}</span>
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <h1 className="title">Settings</h1>
                        <div className="profileSettings">
                            <button className="profileButton">Edit Profile</button>
                            <button 
                                className="profileButton"
                                onClick={() => setShowChangePasswordForm(!showChangePasswordForm)}
                            >
                                Change Password
                            </button>
                        </div>
                        {showChangePasswordForm && (
                            <div className="changePasswordForm">
                                <h2>Change Password</h2>
                                <form onSubmit={handlePasswordChange}>
                                    <input
                                        type="password"
                                        placeholder="Current Password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        required
                                    />
                                    {error && <p className="error">{error}</p>}
                                    <button type="submit" className="profileButton">Submit</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
