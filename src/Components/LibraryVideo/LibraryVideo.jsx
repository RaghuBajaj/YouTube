import { useContext } from 'react';
import './LibraryVideo.css';
import { YouTubeContext } from '../../Context';

const LibraryVideo = ({video}) => {
  const { handleSelectVideo } = useContext(YouTubeContext);
  return (
    <div className='container_LV' onClick={() => {handleSelectVideo(video)}}>
        <div className='video_div_LV'>
            <video src={video?.video} className='video_LV'></video>
        </div>
        <div className='video_info_div_LV'>
            
            <div className='video_dec_div_LV'>
                <p className='vid_title_LV'>{video?.title}</p>
                <p className='vid_uploader_LV '>{video?.uploader}</p>
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

export default LibraryVideo
