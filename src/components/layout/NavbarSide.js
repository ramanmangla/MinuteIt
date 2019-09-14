import React from "react";
import { Link } from "react-router-dom";

const NavbarSide = () => {
  return (
    <div className='navbar-side'>
      <nav>
        <Link to='/' className='navbar-side-link'>
          <i className='fas fa-home'></i>
        </Link>
        <Link to='/history' className='navbar-side-link'>
          <i className='fas fa-history'></i>
        </Link>
        <Link to='/about' className='navbar-side-link'>
          <i className='fas fa-info-circle'></i>
        </Link>
      </nav>
    </div>
  );
};

export default NavbarSide;
