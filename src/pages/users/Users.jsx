// src/pages/Users.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/users/userSlice';
import './users.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import UserTable from '../../components/userTable/UserTable';

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error, token } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />
        <UserTable />
      </div>
    </div>
  );
};

export default Users;
