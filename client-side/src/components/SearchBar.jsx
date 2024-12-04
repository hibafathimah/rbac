import React from 'react'
import search from '../assets/images/Search.svg'

const Searchbar = () => {
  return (

 
       <div className="relative font-pop mx-auto h-[55px] mr-20 max-w-lg">
            <input
                type="text"
                placeholder="Search commands or anything"
                className="py-[5px] px-4 bg-[#E6E6E6] rounded-[18px] border-none focus:outline-none focus:border-gray-300 shadow-sm w-[500px] text-[13px] h-[40px]"
            />
            <div className="absolute inset-y-0 bottom-4  right-0 pr-1 flex items-center pointer-events-none ">
                <img src={search} width={30} alt="Search icon" />
            </div>
        </div>
  
    
  )
}

export default Searchbar