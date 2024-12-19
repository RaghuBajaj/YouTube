import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import Leftsidebar from './Components/Leftsidebar/Leftsidebar'
import Drawersliderbar from './Components/Leftsidebar/Drawersliderbar'
import Allroutes from './Allroutes'

const App = () => {
  return (
    <div className='Container_App'>
      <Navbar/>
      {/* <Leftsidebar/> */}
      <Allroutes/>
      {/* <Drawersliderbar/> */}
    </div>
  )
}

export default App
