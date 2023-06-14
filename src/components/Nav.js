import React from 'react';
import {Link} from  'react-router-dom'
import Logo from '../assets/logos/Logo.svg';

export const NavItems = () => {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><Link to="/booking">Reservations</Link></li>
      <li><a href="#login">Login</a></li>
    </>
  )
}

const Nav = () => {
  return (
    <nav className="nav-bar">
      <img src={Logo} alt="Logo" className="logo" />
      <ul class="topnav" id="myTopnav">
        <NavItems />
      </ul>
    </nav>
  );
};

export default Nav;
