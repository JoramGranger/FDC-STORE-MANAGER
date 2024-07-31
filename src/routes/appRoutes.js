import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from './protectedRoute';
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Users from "../pages/users/Users";
import Product from "../pages/product/Product";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import NewProduct from "../pages/product/NewProduct";
import SingleProduct from "../pages/product/SingleProduct";
import EditProduct from "../pages/product/EditProduct";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import NotAuthorized from "../pages/errors/NotAuthorized";
import { productInputs, userInputs } from "../formSource";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<ProtectedRoute allowedRoles={['admin']}><Home /></ProtectedRoute>} />
      {/* users */}
      <Route path="users">
        <Route index element={<ProtectedRoute allowedRoles={['admin']}><Users /></ProtectedRoute>} />
        <Route path=":userId" element={<ProtectedRoute allowedRoles={['admin']}><Single /></ProtectedRoute>} />
        <Route path="new" element={<ProtectedRoute allowedRoles={['admin']}><New inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
      </Route>

      {/* products */}
      <Route path="products">
        <Route index element={<ProtectedRoute allowedRoles={['admin']}><Product /></ProtectedRoute>} />
        <Route path=":productId" element={<ProtectedRoute allowedRoles={['admin']}><SingleProduct /></ProtectedRoute>} />
        <Route path=":productId/edit" element={<ProtectedRoute allowedRoles={['admin']}><EditProduct /></ProtectedRoute>} />
        <Route path="new" element={<ProtectedRoute allowedRoles={['admin']}><NewProduct inputs={productInputs} title="Add New Product" /></ProtectedRoute>} />
      </Route>

      {/* profile */}
      <Route path="profile">
        <Route index element={<ProtectedRoute allowedRoles={['admin']}><Profile /></ProtectedRoute>} />
      </Route>

      {/* settings */}
      <Route path="settings" element={<ProtectedRoute allowedRoles={['admin']}><Settings /></ProtectedRoute>} />

      {/* Not Authorized */}
      <Route path="not-authorized" element={<NotAuthorized />} />
    </Routes>
  );
};

export default AppRoutes;
