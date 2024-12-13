// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <Link style={styles.navItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={styles.navItem} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link style={styles.navItem} to="/contact-us">
            Contact Us
          </Link>
        </li>
        <li>
          <Link style={styles.navItem} to="/about-us">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    padding: "10px 20px",
    margin: "0 10px",
  },
};

export default Navbar;
