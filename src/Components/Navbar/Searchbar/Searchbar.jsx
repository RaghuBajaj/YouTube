import React, { useState } from 'react';
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SearchList from './SearchList';
import "./Searchbar.css";

const Searchbar = () => {
    const [searchQuery,setSearchQuery] = useState('');
    const [searchList,setSearchList] = useState(false);
    const TitleArray=["video1","video2","video3","video4","video5","animation video","Movies"]
  return (
    <>
    <div className='SearchBar_Container'>
        <div className='SearchBar_Container2'>
            <div className='search_div'>
                <input type='text' className='iBox_SearchBar' placeholder='Search'/>
                <Link>
                  <FaSearch className='searchIcon_SearchBar'/>
                </Link>
                <BsMicFill className='Mic_SearchBar'/>
                {searchQuery && searchList && 
                <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray}/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Searchbar
