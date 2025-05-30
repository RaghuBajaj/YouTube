import React from 'react'
import './ShowVideogrid.css';
import HomeVideo from '../HomeVideo/HomeVideo'

const ShowVideogrid = ({ vid }) => {
  return (
    <div className='container_svg'>
        { vid?.map(video => {
            return(
                <HomeVideo key={ video.id } video={ video }/>
            )
        })}
    </div>
  )
};

export default ShowVideogrid;
