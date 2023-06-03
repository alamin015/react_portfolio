import React, { useEffect, useState } from 'react';
import SingleTabMenu from './SingleTabMenu/SingleTabMenu';

const Tab = () => {
    const [menu,setMenu] = useState([]);
    const [tabItem,setTabItem] = useState({})
    const [id,setId] = useState(2);

    useEffect(() => {
        fetch('tabMenu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
   
    useEffect(() => {
        fetch('tabItems.json')
        .then(res => res.json())
        .then(data => {
            const result = data.find(item => item.id === id)
            setTabItem(result)
        })
    },[id])


  return (
    <div className='py-12'>
        <div className="container">
            <div className="flex justify-between gap-8">
                <div className='w-[500px] flex-shrink-0'>
                    {
                        menu.map(item => <SingleTabMenu myId={id} setId={setId} item={item} key={item.id} />)
                    }
                </div>
                <div className='bg-[#FAFEFE] p-5'>
                    <img className='mx-auto w-[238px] h-[238px]' src={tabItem.img} alt=""/>
                    <div className="mt-10">
                        <h2 className='mb-4 font-Jost font-medium text-3xl text-primary'>{tabItem.title}</h2>
                        <p className='font-Jost text-xl text-primary mb-7'>{tabItem.desc}</p>
                    </div>
                    <button className='btn'>Send Ping</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tab