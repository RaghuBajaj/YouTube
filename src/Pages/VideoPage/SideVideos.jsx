import React, { useContext } from 'react';
import './SideVideos.css';
import { YouTubeContext } from '../../Context';

const SideVideos = ({vid}) => {
    const {setShowVid,navigate,setHistory,history} = useContext(YouTubeContext);
    const handleSelectVid =()=>{
        setShowVid(vid);
        // setHistory((pre)=>{
        //     return{ ...pre,vid.id};
        //   });
        setHistory((pre)=>{return[...pre, vid.id] });
        navigate('/youtube/feed/videopage');
    }
  return (
    <div className='container_SidVid' onClick={handleSelectVid}>
        <div className='vid_div_SidVid'>
            <video src={vid.video} className='vid_SidVid'/>
        </div>
        <div className='v_i_div_SidVid'>
            <p className='v_i_1_SidVid'>{vid.title}</p>
            <div className='v_i_2_SidVid'>
                <p>{vid.uploader}</p>
                <p>18 min ' views</p>
            </div>
            <div className='v_n_SidVid'>
                New
            </div>
        </div>
        <div className='threedot_SV'>
            <p></p>
            <p></p>
            <p></p>    
        </div>
    </div>
  )
}

export default SideVideos