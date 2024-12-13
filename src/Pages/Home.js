import React from "react";
import { Link } from "react-router-dom";
import "../components/Navigation.css";
export default function Home() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/About Us">About Us</Link>
        </li>
        <li>
          <Link to="/Contact Us">Contact Us</Link>
      </ul>
    </div>
  );
}
