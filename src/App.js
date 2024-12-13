// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ContactUs from "./Pages/Contact_Us";
import AboutUs from "./Pages/About_Us";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navigation bar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<Contact_Us />} />
        <Route path="/about_us" element={<About_Us />} />
      </Routes>
    </Router>
  );
};

export default App;
