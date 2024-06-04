import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../src/features/auth/authSlice';

import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Profile from "./pages/profile/Profile";

import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'

function App() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }; 


  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />

            {/* users */}
            <Route path="users">
              <Route index element={<List /> } />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs = {userInputs}/>} title={`Add New User`}/>
            </Route>

            {/* products */}
            <Route path="products">
              <Route index element={<List /> } />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs = {productInputs}/>} title={`Add New Product`}/>
            </Route>

            {/* profile */}
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
