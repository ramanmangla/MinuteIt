import React from "react";
import { Link } from "react-router-dom";

const NavbarSide = () => {
  return (
    <header className='navbar-side'>
      <nav>
        <Link to='/' className='navbar-side-link'>
          /Home/
        </Link>
        <Link to='/history' className='navbar-side-link'>
          /History/
        </Link>
        <Link to='/about' className='navbar-side-link'>
          /About/
        </Link>
      </nav>
    </header>
  );
};

export default NavbarSide;
