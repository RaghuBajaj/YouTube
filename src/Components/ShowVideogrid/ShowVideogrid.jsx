import React from 'react'
import './ShowVideogrid.css';
import ShowVideo from '../ShowVideo/ShowVideo'

const ShowVideogrid = ({vid}) => {
  return (
    <div className='container_svg'>
        {vid?.map(video=>{
            return(
                <ShowVideo key={video.id} video={video}/>
            )
        })}
      
    </div>
  )
}

export default ShowVideogrid
