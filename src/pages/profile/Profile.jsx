import React from "react";
import './profile.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from 'react-redux';


const Profile = () => {

    const { user } = useSelector((state) => state.auth);

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
                            <button className="profileButton">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;