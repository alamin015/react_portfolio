import React from 'react';
import img from '../../../assets/business/img.png';
import topShape from '../../../assets/business/top-shape.png';
import bottomShape from '../../../assets/business/bottom-shape.png';
import arrow from '../../../assets/business/arow.png';

const Business = () => {
  return (
    <div className='py-12 business'>
        <div className="container py-8">
            <div className="flex items-center justify-between gap-5">
                <div className='w-1/2'>
                    <h2  className='text-primary text-5xl font-Jost font-semibold'>We help to your grow business</h2>
                    <p className='mt-5 text-primary mb-8 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="btn">Learn more</button>
                </div>
                <div className='relative w-1/2'>
                    <img src={img} className='mx-auto max-w-[450px] w-full' alt="image" />
                    <img src={arrow} className='absolute -left-[360px] -bottom-[50px]' alt="arr" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business