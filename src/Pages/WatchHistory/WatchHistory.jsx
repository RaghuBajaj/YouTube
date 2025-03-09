import React, { useContext} from 'react'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import { YouTubeContext } from '../../Context'
import SideVideos from '../VideoPage/SideVideos';
import './WatchHistory.css';

const WatchHistory = () => {
  const {allvideos,watchhistory} = useContext(YouTubeContext);
  return (
    <div className='container_WH'>
      <div className='leftside_hom'>
        <Leftsidebar/>
      </div>
      <div className='Vid_part2_WH'>
        <div className='vid_list_WH'>
          {watchhistory.map((htry,idx)=>{
            const vid = allvideos.find((item)=> item.id === htry); 
            return(
              <SideVideos key={idx} vid={vid}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WatchHistory
