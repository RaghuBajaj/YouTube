import { useContext } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
// import Drawersliderbar from './Components/Leftsidebar/Drawersliderbar.jsx'
import Allroutes from './Allroutes.jsx'
import Leftsidebar from './Components/Leftsidebar/Leftsidebar.jsx';
import "./Pages/Home/Home.css"
import { YouTubeContext } from './Context.js';
import Login from './Pages/Login/Login.jsx';
// import { Route, Router } from 'react-router-dom';

const App = () => {
  const {signUp} = useContext(YouTubeContext);
  return (
    <>
    {signUp === true && <Login/> }
    {signUp === false && 
    <div className='Container_App'>
      {/* {(drawSlidbar=== true)&& 
      <div className='dsb_App'>
      <Drawersliderbar/>
      </div>
      } */}
      <Navbar />
      <div className='container_hom'>
        <div className='leftside_hom'>
          <Leftsidebar/>
        </div>
        <div className='home_hom'>  
          <Allroutes/>
        </div>
      </div>
    </div>}
    </>
  )
}

export default App
