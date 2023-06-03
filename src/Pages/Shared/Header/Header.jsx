import React, { useEffect, useState } from 'react';
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false)
  const [headerActive,setHeaderActive] = useState(false)


useEffect(() => {
  window.addEventListener("scroll",() => {
    if(scrollY > 100){
      setHeaderActive(true)
    }else {
      setHeaderActive(false)
    }
  })
},[])


const handleMenu = () => {
  setMobileMenu(!mobileMenu)
}
  const navOptions = <>
  <NavLink to="/" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>Home</NavLink>
  <NavLink to="/what" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>What i do</NavLink>
  <NavLink to="/portfolio" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>Portfolio</NavLink>
  <NavLink to="/about" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>About</NavLink>
  <NavLink to="/contact" className={({isActive}) => isActive ? "active":"text-base font-Jost"}>Contact</NavLink>
  <button className="btn">Login</button>
  </>

  return (
    <header className={`py-4 bg-white z-[9999] fixed top-0 left-0 w-full ${headerActive ? "HeaderActive":''}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={logo} />
          <ul className='hidden md:flex items-center gap-11'>
            {
              navOptions
            }
          </ul>
          <div className='md:hidden' onClick={handleMenu}>
          {
            mobileMenu ? <FaTimes className='text-2xl cursor-pointer md:hidden' />:<FaBars className='text-2xl cursor-pointer md:hidden' />
          }
          </div>
          
        </div>
      </div>
      <div className={`mobileHeader ${mobileMenu ? "menuActive" : ''}`}>
        <div className="container">
          <ul className='flex flex-col gap-4 pt-2 pb-4'>
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