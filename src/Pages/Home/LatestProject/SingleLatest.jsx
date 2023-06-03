import React from 'react'

const SingleLatest = ({item}) => {

    const {name,photo,description} = item
  return (
    <div className='p-6 rounded-md bg-[#FAFAFA]'data-aos="fade-up">
        <div className='max-w-[323px] mx-auto text-center'>
            <img className='mx-auto w-full' src={photo} alt="" />
            <h2 className='text-justify mt-5 text-2xl mb-2 font-medium text-primary font-Jost'>{name}</h2>
            <p className='text-justify text-primary font-Jost'>{description}</p>
        </div>
    </div>
  )
}

export default SingleLatest