import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
    // {title,overview}
  return (
    <div className='w-screen aspect-video px-6 md:px-24 pt-[18%] absolute text-white  bg-black bg-opacity-35'>
        <h1 className='2xl md:text-6xl w-1/4 font-bold'>{title}</h1>
        <p className='hidden md:inline-block text-lg py-6 w-1/4'>{overview}</p>

       <div className='flex my-4 md:0'>
       <button className='mx-2 bg-white flex justify-between rounded-md items-center px-3 md:px-12 text-lg text-black py-1 md:py-4 hover:bg-opacity-70'> <FaPlay/>  Play</button>
       <button className='bg-gray-500 sm:hidden md:flex bg-opacity-50 justify-between rounded-md items-center px-12 text-lg text-white p-4'> More Info<span ><CiCircleInfo /></span>
      </button>
       </div>
    </div>
  )
}

export default VideoTitle