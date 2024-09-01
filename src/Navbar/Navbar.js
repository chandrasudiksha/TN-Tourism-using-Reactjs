import './Navbar.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleTourChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <>
      <div className="nav-bar">
        <h1 className="logo">Re:Tour</h1>
        <ul className="Nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Aboutus">About Us</Link></li>
          <li>
            <select onChange={handleTourChange} className="nav-select">
              <option value="">Tour</option>
              <option value="/Hills">Hills</option>
              <option value="/Beach">Beaches</option>
              <option value="/Temples">Temples</option>
            </select>
          </li>
          <li><Link to="/Contact"><a>Contact Us</a></Link></li>
          <li><Link to="/Login"><button className="login-btn">Login</button></Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
