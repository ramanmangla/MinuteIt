import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarTop = ({ title, icon }) => {
  return (
    <header className='navbar-top'>
      <h1>{title}</h1>
      <ul className='inline-div'>
        <li className='navbar-top-link'>/Time/</li>
        <li className='navbar-top-link'>/Button/</li>
        <li className='navbar-top-link'>/RecordIcon/</li>
      </ul>
    </header>
  );
};

NavbarTop.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavbarTop.defaultProps = {
  title: "Minute It",
  icon: "fas fa-id-card-alt"
};

export default NavbarTop;
