import React from 'react';
import logo from '../../../assets/logo.png';
import {FaPhoneVolume,FaMapMarkerAlt,FaRegEnvelope} from  "react-icons/fa";


const Footer = () => {
  return (
    <footer className='py-8 bg-[#fafafa]'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className='lg:col-span-2'>
              <img src={logo} className='mb-1' alt="" />
              <p className='text-[#444444] text-base font-Jost '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <h2 className='font-Jost text-xl font-medium text-primary mb-5'>Quick Links</h2>
              <ul>
                <li className='font-Jost text-base text-primary mb-3'>Home</li>
                <li className='font-Jost text-base text-primary mb-3'>What we do</li>
                <li className='font-Jost text-base text-primary mb-3'>Portfolio</li>
                <li className='font-Jost text-base text-primary mb-3'>About Us</li>
                <li className='font-Jost text-base text-primary'>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className='font-Jost text-xl font-medium text-primary mb-5'>Support</h2>
              <ul>
                <li className='font-Jost text-base text-primary mb-3'>Privacy Policy</li>
                <li className='font-Jost text-base text-primary mb-3'>Terms of use</li>
                <li className='font-Jost text-base text-primary mb-3'>FAQs</li>
                <li className='font-Jost text-base text-primary'>Sitemap</li>
              </ul>
            </div>
            <div>
              <h2 className='font-Jost text-xl font-medium text-primary mb-5'>Contact</h2>
              <li className=' mb-3 flex items-center gap-4 font-Jost text-base text-primary'><FaMapMarkerAlt /> <p>Sylhet,BD</p></li>
              <li className='font-Jost text-base text-primary mb-3 flex items-center gap-4'><FaPhoneVolume /><p>+8801318509643</p></li>
              <li className='font-Jost text-base text-primary flex items-center gap-4'><FaRegEnvelope /><p>alaminsf40@gmail.com</p></li>
            </div>
        </div>
      </div>
      <hr className='my-6 bg-[#D7D7D7]' />
      {<p className='text-center'>Copyright © 2000-{ new Date().getFullYear()} Design lab. All right reserved</p>}
    </footer>
  )
}

export default Footer