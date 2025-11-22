import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">Self<span className="logo-accent">Growth</span>.</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Catalog</Link>
          <a href="#" className="nav-link">Reading List</a>
          <button className="btn-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
}
