import React, { useContext } from 'react';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import { YouTubeContext } from '../../Context';
import SideVideos from '../VideoPage/SideVideos';
import '../WatchHistory/WatchHistory.css';

const LikedVideo = () => {
  const {likedVideo,allvideos} = useContext(YouTubeContext);
  return (
    <div className='container_WH'>
      <div className='leftside_hom'>
        <Leftsidebar/>
      </div>
      <div className='Vid_part2_WH'>
        <div className='vid_list_WH'>
          {likedVideo.map((htry,idx)=>{
            const vid = allvideos.find((item)=> item.id === htry); 
            return(
              <SideVideos key={idx} vid={vid}/>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default LikedVideo;
