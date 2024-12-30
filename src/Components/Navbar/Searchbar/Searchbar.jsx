import React, { useState } from 'react';
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import { Link } from 'react-router-dom';
import SearchList from './SearchList';
import "./Searchbar.css";

const Searchbar = () => {
    const [searchQuery,setSearchQuery] = useState('');
    const [searchList,setSearchList] = useState(false);
    const TitleArray=["video1","video2","video3","video4","video5","animation video","Movies"]
  return (
    <>
      <div className='container_Sb'>
        <div className='FaSearch_div_Sb FaS1_Sb'>
        <SlMagnifier  size={20}/>
        </div>
        <div className='child_cont_Sb'>

          <input type='text' placeholder='Search' className='input_Sb'/>

          <Link className='FaSearch_div_Sb FaS2_Sb'>
            <SlMagnifier  size={20}/>
          </Link>

        </div>

          <BsMicFill className='Mic_Sb'/>
      </div>

        {/* <div className='search_div'>
          <Link>
            <FaSearch className='searchIcon_SearchBar'/>
          </Link>

          <BsMicFill className='Mic_SearchBar'/>

          {searchQuery && searchList && 
          <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray}/>}
        </div> */}
    </>
  )
}

export default Searchbar
