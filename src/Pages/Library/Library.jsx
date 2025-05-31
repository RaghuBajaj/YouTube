import { useContext } from 'react';
import './Library.css';
import { Link } from 'react-router-dom';
import { YouTubeContext } from '../../Context';
import LibraryVideo from '../../Components/LibraryVideo/LibraryVideo';

const Library = () => {
  const {allVideos, history, watchLater, likedVideo, playlists, user} = useContext(YouTubeContext);
  return (
      <div className='container_Lib'>
        <div className='child_container1_Lib'>
          <Link to={'/youtube/feed/accounts/profile'} className='User0_Lib'>
            <p className='char0_Lib'>{user.userName ? user.userName[0].toUpperCase(): 'R'}</p>
          </Link>
          <div className='channel_user_Lib'>
            <Link to={'/youtube/feed/accounts/profile'} className='link_full_Lib'>
            <div className='c_u_name_Lib'>{user.userName ? user.userName: 'Raghunandan Bajaj'}</div> 
              <div className='c_info_div_Lib'>
                <p className='c_info_1_Lib'>{user.userName ? `@${user.userName}-w8m` : '@RaghunandanBajaj-w8m'}</p>
                <p className='dot_Lib'></p>
                <p className='c_info_1_Lib'>View channel</p>
              </div>
            </Link>
            <div className='options_div_Lib'>
              <div className='opt_div_Lib'>
                {/* <img alt='SwitchAccount-logo'/> */}
                <p className='opt_Lib'>Switch account</p>
              </div>
              <div className='opt_div_Lib'>
                {/* <img alt='GoogleAccount-logo'/> */}
                <p className='opt_Lib'>Google account</p>
              </div>
            </div>
          </div>
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/watchhistory'} className='title_Lib'>History</Link>
            <Link to={'/youtube/feed/watchhistory'} className='vm_Lib'>View all</Link>
          </div>
          <div className='video_div_Lib'>
            {history.map((itm,idx)=>{
              const video = allVideos.find((item)=> item.id === itm); 
              return(
                <LibraryVideo key={idx} video={video}/>
              )
            })}
          </div>
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/playlist'} className='title_Lib'>Playlists</Link>
            <Link to={'/youtube/feed/playlist'} className='vm_Lib'>View all</Link>
          </div>
          <div className='video_div_Lib'>
            {playlists.map((itm,idx)=>{
              const video = allVideos.find((item)=> item.id === itm); 
              return(
                <LibraryVideo key={idx} video={video}/>
              )
            })}
          </div>
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/watchlater'} className='title_Lib'>Watch Later</Link>
            <Link to={'/youtube/feed/watchlater'} className='vm_Lib'>View all</Link>
          </div>
          <div className='video_div_Lib'>
            {watchLater.map((itm,idx)=>{
              const video = allVideos.find((item)=> item.id === itm); 
              return(
                <LibraryVideo key={idx} video={video}/>
              )
            })}
          </div>
        </div>
        <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/likedvideo'} className='title_Lib'>Liked videos</Link>
            <Link to={'/youtube/feed/likedvideo'} className='vm_Lib'>View all</Link>
          </div>
          <div className='video_div_Lib'>
            {likedVideo.map((itm,idx)=>{
              const video = allVideos.find((item)=> item.id === itm); 
              return(
                <LibraryVideo key={idx} video={video} />
              )
            })}
          </div>
        </div>
      </div>
  )
}

export default Library
