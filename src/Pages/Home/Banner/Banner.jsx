import React from 'react';
import Lottie from "lottie-react";
import development from "../../../assets/lotti/development.json";


const Banner = () => {
  return (
    <div className='bg-[#FAFEFE] banner-shape mt-[80px]'>
        <div className="container py-8">
            <div className="sm:flex items-center justify-between">
                <div className='sm:w-1/2 w-full'>
                <Lottie animationData={development} loop={true} />
                </div>
                <div>
                    <h2 className='heading font-Jost font-semibold lg:text-6xl sm:text-5xl text-2xl'>Your concept, our <br className='hidden lg:block' /> creativity</h2>
                    <p className='sm:mt-5 mt-4 sm:mb-12 mb-8 font-Jost text-base text-[#444444]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner