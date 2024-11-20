import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../Components/Login/Login";
import ProfileAdd from "../Components/Profile/ProfileAdd";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Components/Home";
import Profile from "../Components/Profile/Profile";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="addprofile" element={<ProfileAdd />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;