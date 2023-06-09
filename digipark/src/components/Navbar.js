
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <div className="container">

      <div className="center">
        <div className="links">
          <Link to="/parkings" style={{ fontSize: "24px" }}>Parking</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/admin" style={{ color: "rgb(15, 226, 155)", fontSize: "24px" }}>Admin</Link>
      </div>
    </div>
  );
}

export default Navbar;
