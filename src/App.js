import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Contact_Us from "./pages/Contact Us.js";
import Services from "./Pages/Services.js";
export default function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About Us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
        <h1>You Found the G Spot</h1>
      </div>
    </Router>
  );
}
