import React, { useContext } from 'react'
import './ShowVideo.css';
import { YouTubeContext } from '../../Context';

const ShowVideo = ({video}) => {
  const {navigate,setShowVid,setHistory,history} = useContext(YouTubeContext);
  const handleSelectVid = () =>{
    setShowVid(video);  
    setHistory((pre)=>{return[ ...pre,  video.id]} );
    navigate('/youtube/feed/videopage');
    console.log("history1",history);
  };
  return (
    <div className='container_SV' onClick={ handleSelectVid}>
        <div className='video_div_SV'>
            <video src={video.video} className='video_SV'></video>
        </div>
        <div className='video_info_div_SV'>
            <div className='char_div_SV'>
              {/* {video.uploader} */}
              <p className='char0_SV'>{video.uploader[0]}</p>
            </div>
            <div className='video_dec_div_SV'>
                <p className='vid_title_SV'>{video.title}</p>
                <p className='vid_uploader_SV'>{video.uploader}</p>
                <div className='view_time_SV'>
                  <span className='vid_uploader_SV'>views</span>
                  <p className='dot_SV'></p>
                  <span className='vid_uploader_SV'>18 min ago</span>
                </div>
            </div>
            <div className='threedot_SV'>
              <p></p>
              <p></p>
              <p></p>    
            </div>
        </div>
    </div>
  )
}

export default ShowVideo
