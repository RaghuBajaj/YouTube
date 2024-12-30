import React, { useContext } from 'react';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import { YouTubeContext } from '../../Context';

const LikedVideo = () => {
  const {history,allvideos} = useContext(YouTubeContext);
  return (
    <div className='container_hom'>
      <div className='leftside_hom'>
        <Leftsidebar/>
      </div>
      <div>
        {}
      </div>
    </div>
  )
};

export default LikedVideo;
