import React from 'react';
import img from '../../assets/question/question.png'

const Question = () => {
  return (
    <div className='bg-[#1A223A] sm:h-[80vh]'>
        <div className='myBG h-full'>
            <div className='sm:flex items-center justify-evenly gap-3'>
                <div className='mb-4 sm:mb-0'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-white font-semibold text-2xl sm:text-4xl mb-5 font-Jost'>Have any Question on Mind?</h2>
                    <p className='text-white font-medium font-Jost mb-8 text-base'>Let’s Discuss about your Business and project.</p>
                    <form>
                        <div className='flex items-center justify-between rounded-xl bg-[#293149] py-3 px-2'>
                            <input className='grow bg-transparent border-0 p-2 outline-0 focus:outline-0 text-white font-Jost font-medium text-base' type="text" />
                            <button className='bg-white text-black font-Jost text-base py-2 font-medium px-7 rounded-xl'>send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question