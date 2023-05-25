import React from 'react';
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom';

const Header = () => {


  const navOptions = <>
  <NavLink to="/" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>Home</NavLink>
  <NavLink to="/what" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>What i do</NavLink>
  <NavLink to="/portfolio" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>Portfolio</NavLink>
  <NavLink to="/about" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>About</NavLink>
  <NavLink to="/contact" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>Contact</NavLink>
  <button className="btn">Login</button>
  </>

  return (
    <header className='py-4 bg-white'>
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} />
          <ul className='flex items-center gap-11'>
            {
              navOptions
            }
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header