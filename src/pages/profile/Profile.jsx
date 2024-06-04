import React from "react";
import './profile.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from 'react-redux';

const Profile = () => {

    const { user } = useSelector((state) => state.auth);

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="main">
                    <p className="profileItem">
                        <span>Name:</span>
                        <span>{user && user.username}</span>
                    </p>
                    <p className="profileItem">
                        <span>Name:</span>
                        <span>{user && user.email}</span>
                    </p>
                    <p className="profileItem">
                        <span>Name:</span>
                        <span>{user && user._id}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;