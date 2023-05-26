import React from 'react';
import img from '../../../assets/banner/banner.png'

const Banner = () => {
  return (
    <div className='bg-[#FAFEFE] py-8 banner-shape'>
        <div className="container shape">
            <div className="flex items-center justify-between">
                <div>
                    <img src={img} className='max-w-[553px] w-full' alt="" />
                </div>
                <div>
                    <h2 className='heading font-Jost font-semibold text-7xl'>Your concept, our <br /> creativity</h2>
                    <p className='mt-5 mb-12 font-Jost text-base text-[#444444]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner