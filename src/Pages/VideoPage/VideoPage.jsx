import React, { useContext } from 'react'
import './VideoPage.css';
import { YouTubeContext } from '../../Context';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { SlActionRedo } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import {allvideos} from '../YourVideo/videoAssets';
import SideVideos from './SideVideos';

const VideoPage = () => {
  const {showVid,
    // setShowVid,
    likedVideo,
    setLikedVideo,} = useContext(YouTubeContext);

  const handleAddLike = ()=>{
    // setShowVid((pre)=>{
    //   return { ...pre, pre.likes = showVid.likes+1 };
    // });
    setLikedVideo((pre)=>{
      return[...pre,showVid.id]
    });
    console.log("show",showVid.id);
    console.log("likedvid11",likedVideo);
  };

  return (
    <div className='container_VP'>

      <div className='Vid_part1_VP'>
        <div className='vidBox_VP'>
          <video src={showVid.video}  className='vid_VP' controls/>
        </div>
        <p className='vidTitle_VP'>{showVid.title}</p>
        <div className='Options_div_VP'>
          <div className='L_S_M_div_VP'>
            <div className='char_div_VP'>
              <p className='char0_VP'>{showVid.uploader[0]}</p>
            </div>
            <div className='uploader_VP'>
              {showVid.uploader}
            </div>
          </div>
          <div className='box_div_VP LD_div_VP'>
            <IoMdNotificationsOutline size={22} className='icon_VP'/> 
            <p className='sub_VP'>Subscribe</p>
          </div>
          <div className='L_S_M_div_VP'>
            <div className='box_div_VP'>
              <div className='LD_div_VP LD_1_VP' onClick={()=>handleAddLike()}>
                <SlLike size={22} className='icon_VP'/>
                <p>Like</p>
              </div>
              <span className='Vline_VP'></span>
              <div className='LD_div_VP LD_2_VP'>
                < SlDislike size={22} className='icon_VP'/>
                {/* <p>Dislike</p> */}
              </div>
            </div>
            <div className='box_div_VP LD_div_VP '>
              <SlActionRedo size={22} className='icon_VP'/>
              <p>Share</p>
            </div>
            <div className='box_div_VP more_VP'>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div className='video_info_VP'></div>
        <div className='comments_div_box_VP'>
          <div className='cmt_box_h1_VP'>
            {}Comments
          </div>
          <div className='all_cmts_VP'>
            {}
          </div>
        </div>
      </div>

      <div className='Vid_part2_VP'>
        <div className='vid_list_VP'>
          {allvideos.map(vid=>{
            return(
              <SideVideos key={vid.id} vid={vid}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoPage
