import React, { useContext } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Drawersliderbar from './Components/Leftsidebar/Drawersliderbar.jsx'
import Allroutes from './Allroutes.jsx'
import { YouTubeContext } from './Context.js';

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
