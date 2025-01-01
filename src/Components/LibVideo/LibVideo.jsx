import React from 'react';
import './LibVideo.css';

const LibVideo = ({video}) => {
    const handleSelectVid = () =>{
        // setShowVid(video);  
        // setHistory((pre)=>{return[ ...pre,  video.id]} );
        // navigate('/youtube/feed/videopage');
        // console.log("history1",history);
    };
    console.log('videee',video);
  return (
    <div className='container_LV' onClick={ handleSelectVid}>
        <div className='video_div_LV'>
            <video src={video.video} className='video_LV'></video>
        </div>
        <div className='video_info_div_LV'>
            
            <div className='video_dec_div_LV'>
                <p className='vid_title_LV'>{video.title}</p>
                <p className='vid_uploader_LV '>{video.uploader}</p>
                <div className='view_time_LV'>
                  <span className='vid_uploader_LV'>views</span>
                  <p className='dot_LV'></p>
                  <span className='vid_uploader_LV'>18 min ago</span>
                </div>
            </div>
            <div className='threedot_LV'>
              <p></p>
              <p></p>
              <p></p>    
            </div>
        </div>
    </div>
  )
}

export default LibVideo
