import React, { useState } from 'react'
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import Searchbar from './Searchbar/Searchbar'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
    const [currentUser,setCurrentUser]=useState({});
  return (
    <>
    <div className='contaner_nbar'>
        <div className='leftslide_nbar'>
            <div className='grid_nbar'>
                <p ></p>
                <p ></p>
                <p ></p>
            </div>
            <Link to={"/youtube/feed"} className='logoTitle_nbar'>
              <img src={logo} alt='' className='logo_nbar'/>
              <p className='title_nbar'>YouTube</p>
            </Link>
        </div>
        <Searchbar/>
        <div className='icons_div_nbar'>
            <RiVideoAddLine size={22} className='icons_nbar'/>
            <div className='app_Box'>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
            </div>
            <IoMdNotificationsOutline size={22} className='icons_nbar'/>
        </div>
        <div>
            {currentUser ? (
                <>
                <div>
                    <p>
                        {}
                    </p>
                </div>
            </>):(<>
            <p>
                <BiUserCircle size={22}/>
                <b>Sign in</b>
            </p>
            </>)}
        </div>
    </div>
    {}
    </>
  )
}

export default Navbar
