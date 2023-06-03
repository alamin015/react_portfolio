import React from 'react';
import img from '../../../assets/business/img.png';
import arrow from '../../../assets/business/arow.png';

const Business = () => {
  return (
    <div className='py-12 business'>
        <div className="container py-8">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
                <div className='sm:w-1/2 w-full'>
                    <h2  className='text-primary text-2xl sm:text-5xl font-Jost font-semibold'>We help to your grow business</h2>
                    <p className='mt-5 text-primary sm:mb-8 mb-5 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="btn">Learn more</button>
                </div>
                <div className='relative sm:w-1/2 w-full'>
                    <img src={img} className='mx-auto mb-3 sm:mb-0  sm:w-[450px] w-[222px]' alt="image" />
                    <img src={arrow} className='absolute md:block hidden -left-[360px] -bottom-[50px]' alt="arr" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business