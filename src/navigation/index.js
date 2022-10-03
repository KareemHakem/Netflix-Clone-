import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "../pages/Banner";

import HomePage from "../pages/Home";
import Navbar from "../pages/Navbar";

export default function Navigation() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
