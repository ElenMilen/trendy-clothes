import React from 'react';
import logo from '../../assets/images/logo.png';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className="header">
      <Link to='/'>
        <div href="" className="logo">
          <img src={logo} alt='logo' className='logo'/>
        </div>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="#work">Clothes</a></li>
        <li><a href="#about">Hats</a></li>
        <li><a href="#careers">Shoes</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
    )
}
export default Header