import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home";

import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLogin from "../pages/AuthLogin";
import { auth } from "../firebase";

export default function Navigation() {
  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
      }
    });
    return unsbscribe();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
