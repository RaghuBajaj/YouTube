// import { useEffect } from 'react';
import ShowVideogrid from '../../Components/ShowVideogrid/ShowVideogrid';
import './Home.css';
import { allvideos } from '../YourVideo/videoAssets';

const Home =() => {
  const navlist = [
    "All","Live","New","C++","Python","React.js","CSS","HTML"
  ];
  return (
    <div className='container_hom'>
      <div className='home_hom'>
        <div className='navlist_hom'>
          {navlist.map(itm=>{
            return(
              <div key={itm} className='navitm_hom'>{itm}</div>
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
