import React from 'react';
import './Header.css';
import ULLogo from "../src/assets/UL_Header_Logo.jpg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header__container'>
    <div className='header'>
        <img 
            className="header__logo" 
            src={ULLogo}
        />
        <h2 className='header__home'>Home</h2>
        <h2 className='header__people'>People</h2>
        <h2 className='header__research'>Research</h2>
        <h2 className='header__publications'>Publications</h2>
    </div>
    </div>
  )
}

export default Header
