import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const onRecord = () => {};

const NavbarTop = ({ title, icon }) => {
  return (
    <header className='navbar-top'>
      <i className='fas fa-cookie-bite'></i>
      <ul className='inline-div'>
        <li className='navbar-top-item item-white'>0:48s</li>
        <li className='navbar-top-item'>
          <Button name='Record' handler='onRecord' />
        </li>
        <li className='navbar-top-item item-white mic'>
          <i class='fas fa-microphone'></i>
        </li>
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
