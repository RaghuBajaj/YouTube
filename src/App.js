import React, { useContext, useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Leftsidebar from './Components/Leftsidebar/Leftsidebar'
import Drawersliderbar from './Components/Leftsidebar/Drawersliderbar'
import Allroutes from './Allroutes'
import { YouTubeContext } from './Context';

const App = () => {
  const {drawSlidbar} = useContext(YouTubeContext);
  return (
    <div className='Container_App'>
      {(drawSlidbar=== true)&& 
      <div className='dsb_App'>
        <Drawersliderbar/>
      </div>
      }
      <Navbar />
      <Allroutes/>
    </div>
  )
}

export default App
