import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchList.css'

const SearchList = ({TitleArray,setSearchQuery}) => {
  return (
    <>
    <div className='Container_SearchList'>
        {TitleArray.map(m =>{
          return <p key={m} className='titleItem'>
            <FaSearch/>{m}
          </p>
        })}
    </div>
    </>
  )
}

export default SearchList
