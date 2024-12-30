import React from 'react'
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
            <Link to={'/youtube/feed'}  className='logo_div_Dsb'>
                <img src={logo} className='logo_Dsb'/>
                <div className='title_Dsb'>Youtube</div>
            </Link>
        </div>

        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Home</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Shorts</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Subscriptions</p>
            </div>
        </div>
        <p className='btw_line_Dsb'></p>
        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <p className='option_Dsb'>You</p>
                <img></img>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>History</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Playlists</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Your videos</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Your courses</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Your podcasts</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Watch Later</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Liked videos</p>
            </div>
        </div>
        <p className='btw_line_Dsb'></p>
        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <p className='option_Dsb'>Explore</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Trending</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Shopping</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Music</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Films</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Live</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Gaming</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>News</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Sport</p>
            </div>
        </div>
        <p className='btw_line_Dsb'></p>
        <div className='option_box_Dsb'>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Settings</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Report history</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Help</p>
            </div>
            <div className='options_div_Dsb'>
                <img></img>
                <p className='option_Dsb'>Send feedback</p>
            </div>
        </div>
      
    </div>
  )
}

export default Drawersliderbar
