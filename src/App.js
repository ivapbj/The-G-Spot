// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
// import ContactUs from "./Pages/ContactUs";
// import AboutUs from "./Pages/AboutUs";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navigation bar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact_us" element={<ContactUs />} /> */}
        {/* <Route path="/about_us" element={<AboutUs />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
