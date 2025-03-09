import React from 'react'
import './Leftsidebar.css'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore, MdOutlineSubscriptions, } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Leftsidebar = () => {

  return (
    <div className="container_Lsb">

      <NavLink to={'/youtube/feed'} className="icon_sidebar_div_Lsb">
        <AiOutlineHome size={24} className='icon_sidebar_Lsb'/>
        <div className='text_sidebar_Lsb'>Home</div>
      </NavLink>

      <div className='icon_sidebar_div_Lsb' >
        <MdOutlineExplore size={24} className='icon_sidebar_Lsb'/>
        <div className='text_sidebar_Lsb'>Explore</div>
      </div>

      <div className='icon_sidebar_div_Lsb'>
        <img width={24} className='icon_sidebar_Lsb'alt=''/>
        <div className='text_sidebar_Lsb'>Shorts</div>
      </div>

      <div className='icon_sidebar_div_Lsb'>
        <MdOutlineSubscriptions size={24} className='icon_sidebar_Lsb'/>
        <div className='text_sidebar_Lsb'>Subscription</div>
      </div>

      <NavLink to={'/youtube/feed/Library'} className='icon_sidebar_div_Lsb'>
        <MdOutlineExplore size={24} className='icon_sidebar_Lsb'/>
        <div className='text_sidebar_Lsb'>Library</div>
      </NavLink>
      
    </div>
  )
}

export default Leftsidebar
