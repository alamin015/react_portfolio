import React, { useEffect, useState } from 'react'
import SingleLatest from './SingleLatest'

const LatestProject = () => {
    const [project,setProject] = useState([])

    useEffect(() => {
        fetch('project.json')
        .then(res =>res.json())
        .then(data => setProject(data))
    },[])
  return (
    <div className='py-14'>
        <div className="container">
            <h2 className='mb-8 font-Jost font-medium text-4xl text-center'>Our Latest Project</h2>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    project.map(item => <SingleLatest item={item} key={item.id} />)
                }
            </div>
        </div>
    </div>
  )
}

export default LatestProject