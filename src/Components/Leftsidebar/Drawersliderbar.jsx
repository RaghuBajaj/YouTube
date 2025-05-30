import './Drawersliderbar.css';
import logo from '../Navbar/logo.png';
import { Link } from 'react-router-dom';

const Drawersliderbar = () => {
  return (
    <div className='Container_Dsb'>

        <div className='top_Dsb'>
            <div className='line_Dsb'>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Link to={'/youtube'}  className='logo_div_Dsb'>
                <img alt='Youtube-logo' src={logo} className='logo_Dsb' />
                <div className='title_Dsb'>Youtube</div>
            </Link>
        </div>

        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <img alt='Home-logo'></img>
                <p className='option_Dsb'>Home</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Shorts-logo'></img>
                <p className='option_Dsb'>Shorts</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Subscriptions-logo'></img>
                <p className='option_Dsb'>Subscriptions</p>
            </div>
        </div>
        <p className='btw_line_Dsb'></p>
        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <p className='option_Dsb'>You</p>
                <img alt='user-logo'></img>
            </div>
            <div className='options_div_Dsb'>
                <img alt='History-logo'></img>
                <p className='option_Dsb'>History</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Playlists-logo'></img>
                <p className='option_Dsb'>Playlists</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='videos-logo'></img>
                <p className='option_Dsb'>Your videos</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='courses-logo'></img>
                <p className='option_Dsb'>Your courses</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Products-logo'></img>
                <p className='option_Dsb'>Your podcasts</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='WatchLater-logo'></img>
                <p className='option_Dsb'>Watch Later</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Like-logo'></img>
                <p className='option_Dsb'>Liked videos</p>
            </div>
        </div>
        <p className='btw_line_Dsb'></p>
        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <p className='option_Dsb'>Explore</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Trend-logo'></img>
                <p className='option_Dsb'>Trending</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Shopping-logo'></img>
                <p className='option_Dsb'>Shopping</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Music-logo'></img>
                <p className='option_Dsb'>Music</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Film-logo'></img>
                <p className='option_Dsb'>Films</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Live-logo'></img>
                <p className='option_Dsb'>Live</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Gameing-logo'></img>
                <p className='option_Dsb'>Gaming</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='News-logo'></img>
                <p className='option_Dsb'>News</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Sport-logo'></img>
                <p className='option_Dsb'>Sport</p>
            </div>
        </div>
        <p className='btw_line_Dsb'></p>
        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <img alt='Settings-logo'></img>
                <p className='option_Dsb'>Settings</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Report-logo'></img>
                <p className='option_Dsb'>Report history</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='Help-logo'></img>
                <p className='option_Dsb'>Help</p>
            </div>
            <div className='options_div_Dsb'>
                <img alt='FeedBack-logo'></img>
                <p className='option_Dsb'>Send feedback</p>
            </div>
        </div>
      
    </div>
  )
}

export default Drawersliderbar
