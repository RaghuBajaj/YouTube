import { useContext } from 'react'
// import { Link } from 'react-router-dom';
import './Profile.css';
import { YouTubeContext } from '../../Context';

const Profile = () => {
  const {user, handleLogout, navigate } = useContext(YouTubeContext);
  return (
    <div className='container_hom'>
      <div className='container_Lib'>
        <div className='child_container1_Lib'>
          <div className='User0_Lib'>
            <p className='char0_Lib'>{user.userName ? user.userName[0].toUpperCase(): 'R'}</p>
          </div>
          <div className='channel_user_Lib'>
            <div to={'/youtube/feed/channel'} className='link_full_Lib'>
              <div className='c_u_name_Lib'>{user.userName ? user.userName: 'Raghunandan Bajaj'}</div>
              <p className='c_info_1_Lib p_cnl'>{user.userName ? `@${user.userName}-w8m` : '@RaghunandanBajaj-w8m'}</p>
              <div className='c_info_div_Lib p_div_cnl'>
                <p className='c_info_1_Lib'>More about this channel</p>
                <p className='c_info_1_Lib p_more_cnl'>...more</p>
              </div>
            </div>
            <div className='options_div_Lib'>
              <div className='opt_div_Lib'>
                <p className='opt_Lib'>Customise channel</p>
              </div>
              <div className='opt_div_Lib'>
                <p className='opt_Lib'>Manage videos</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='child_container_Lib'>
          <div className='title_div_Lib'>
            <Link to={'/youtube/feed/watchhistory'} className='title_Lib'>History</Link>
            <Link to={'/'} className='vm_Lib'>View all</Link>
          </div>
          {}
        </div> */}
        <div className='logout' onClick={()=>{handleLogout(); navigate('/youtube')}}>Logout</div>
      </div>
    </div>
  )
};

export default Profile;
