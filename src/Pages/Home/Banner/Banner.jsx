import React from 'react';
import img from '../../../assets/banner/banner.png'

const Banner = () => {
  return (
    <div className='bg-[#FAFEFE] banner-shape'>
        <div className="container py-8">
            <div className="flex items-center justify-between">
                <div>
                    <img src={img} className='max-w-[553px] w-full' alt="" />
                </div>
                <div>
                    <h2 className='heading font-Jost font-semibold lg:text-6xl text-5xl'>Your concept, our <br className='hidden lg:block' /> creativity</h2>
                    <p className='mt-5 mb-12 font-Jost text-base text-[#444444]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner