import React from 'react'

const SingleTabMenu = ({item,setId,myId}) => {
    const {img,title,desc} = item;
    const handleActive = (index) => {
        setId(index);
    }
  return (
    <div className={`flex items-center gap-3 mb-2 cursor-pointer w-full p-4 ${myId === item.id ? 'myActive':'onlyActive'}`} onClick={()=> handleActive(item.id)}>
        <img src={img} className='w-[64px] h-[64px]' alt="" />
        <div>
            <h2 className='text-2xl sm:text-3xl text-primary font-Jost font-medium'>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default SingleTabMenu