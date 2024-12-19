import React from 'react';
import './Library.css';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import { Link } from 'react-router-dom';

const Library = () => {
  return (
    <div className='container_hom'>
      <div className='leftside_hom'>
        <Leftsidebar/>
      </div>

      <div className='container_Lib'>

        <div className='child_container1_Lib'>

          <Link to={'/youtube/feed/channel'} className='User0_Lib'>
            <p className='char0_Lib'>R</p>
          </Link>

          <div className='channel_user_Lib'>
            <Link to={'/youtube/feed/channel'} className='link_full_Lib'>
            <div className='c_u_name_Lib'>Raghunandan Bajaj</div>
            <div className='c_info_div_Lib'>
              <p className='c_info_1_Lib'>@RaghunandanBajaj-w8m</p>
              <p className='dot_Lib'></p>
              <p className='c_info_1_Lib'>View channel</p>
            </div>
            </Link>
            
            <div className='options_div_Lib'>
              <div className='opt_div_Lib'>
                <img alt=''/>
                <p className='opt_Lib'>Switch account</p>
              </div>
              <div className='opt_div_Lib'>
                <img alt=''/>
                <p className='opt_Lib'>Google account</p>
              </div>
            </div>

          </div>
        </div>

        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/watchhistory'} className='title_Lib'>History</Link>
            <Link to={'/'} className='vm_Lib'>View all</Link>
          </div>
          {}
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/'} className='title_Lib'>Playlists</Link>
            <Link to={'/'} className='vm_Lib'>View all</Link>
          </div>
          {}
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/watchlater'} className='title_Lib'>Watch Later</Link>
            <Link to={'/youtube/feed/watchlater'} className='vm_Lib'>View all</Link>
          </div>
          {}
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/likedvideo'} className='title_Lib'>Liked videos</Link>
            <Link to={'/youtube/feed/likedvideo'} className='vm_Lib'>View all</Link>
          </div>
          {}
        </div>

      </div>
    </div>
  )
}

export default Library
