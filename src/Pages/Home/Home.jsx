import React from 'react';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import ShowVideogrid from '../../Components/ShowVideogrid/ShowVideogrid';
import './Home.css';

const Home = () => {
  const vid = [
    {
      id:1,
      title:'video0',
      uploader:'raghu'
    },
    {
      id:2,
      title:'video1',
      uploader:'raghu'
    },
    {
      id:3,
      title:'video2',
      uploader:'raghu'
    },
    {
      id:4,
      title:'video3',
      uploader:'raghu'
    }
  ];
  const navlist = [
    "All","Live","New","c++","python","react.js","css","html"
  ];
  return (
    <div className='container_hom'>
      <div className='leftside_hom'>
        <Leftsidebar />
      </div>
      <div className='home_hom'>
        <div className='navlist_hom'>
          {navlist.map(itm=>{
            return(
              <div className='navitm_hom'>{itm}</div>
            )
          })}
        </div>
        <div className='videogrid_hom'>
        <ShowVideogrid vid={vid} />
        </div>
      </div>
    </div>
  )
}

export default Home
