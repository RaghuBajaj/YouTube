import React, { useContext } from 'react';
import './ShowVideolist.css';
import { YouTubeContext } from '../../Context';

const ShowVideolist = () => {
  const {allvideos}= useContext(YouTubeContext);
  return (
    <div className='container_SVl'>
      <div className='list_cont_SVl'>
        {}
      </div>
    </div>
  )
}

export default ShowVideolist
