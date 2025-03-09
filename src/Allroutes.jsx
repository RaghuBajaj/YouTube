import React from 'react'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Library from './Pages/Library/Library'
import LikedVideo from './Pages/LikedVideo/LikedVideo'
import SearchedPage from './Pages/SearchedPage/SearchedPage'
import VideoPage from './Pages/VideoPage/VideoPage'
import WatchHistory from './Pages/WatchHistory/WatchHistory'
import WatchLater from './Pages/WatchLater/WatchLater'
import Channel from './Pages/Channel/Channel'

const Allroutes = () => {
  return (
    <div className='container_Ar'>
      <Routes>
          <Route path="/" element={<Navigate to="/youtube/feed" replace />} />
          <Route path='/youtube/feed' element={<Home/>} />
          <Route path='/youtube/feed/Library' element={<Library/>} />
          <Route path='/youtube/feed/likedvideo' element={<LikedVideo/>} />
          <Route path='/youtube/feed/searchedpage' element={<SearchedPage/>} />
          <Route path='/youtube/feed/videopage' element={<VideoPage/>} />
          <Route path='/youtube/feed/watchhistory' element={<WatchHistory/>} />
          <Route path='/youtube/feed/watchlater' element={<WatchLater/>} />
          <Route path='/youtube/feed/channel' element={<Channel/>} />

      </Routes>
    </ div>
  )
}

export default Allroutes
