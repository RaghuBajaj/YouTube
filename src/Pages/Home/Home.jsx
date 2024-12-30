import React from 'react';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import ShowVideogrid from '../../Components/ShowVideogrid/ShowVideogrid';
import './Home.css';
import { allvideos } from '../YourVideo/videoAssets';

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
    },
    {
      id:5,
      title:'video4',
      uploader:'raghu'
    },
    {
      id:6,
      title:'video5',
      uploader:'raghu'
    },
    {
      id:7,
      title:'video6',
      uploader:'raghu'
    },
    {
      id:8,
      title:'video7',
      uploader:'raghu'
    }
  ];
  const navlist = [
    "All","Live","New","C++","Python","React.js","CSS","HTML"
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
          <ShowVideogrid vid={allvideos} />
        </div>
      </div>
    </div>
  )
}

export default Home
