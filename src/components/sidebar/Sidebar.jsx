import React from "react";
import './sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import dashLogo from '../../assets/dashboard-logo-01.png'

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';


const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate('/Login');
    }; 

    return (
        <div className="sidebar">

            {/* Top */}
            <div className="top">
                <Link to="/dashboard" style={{textDecoration: 'none'}}>
                <span className="logo">
                    <img src={dashLogo} alt="Fortune Derma" />
                </span>
                </Link>
            </div>
            <hr/>
            {/* Center */}
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <li className="dash">
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: 'none'}}>
                    <li>
                        <PeopleOutlineIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: 'none'}}>
                    <li>
                        <ShoppingBagOutlinedIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <ShoppingCartOutlinedIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    </Link>
                    <li>
                        <LocalShippingOutlinedIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartOutlinedIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    <p className="title">SYSTEM</p>
                    <li>
                        <MonitorHeartOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <DvrOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <Link to="/profile" style={{textDecoration: 'none'}}>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    </Link>
                    <li onClick={handleLogout}>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            {/* Bottom */}
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;