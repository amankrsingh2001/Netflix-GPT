import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
    // {title,overview}
  return (
    <div className='w-scren aspect-video px-24 pt-[18%] absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl w-1/4 font-bold'>{title}</h1>
        <p className='text-lg py-6 w-1/4'>{overview}</p>

       <div className='flex'>
       <button className='mx-2 bg-white flex justify-between rounded-md items-center px-12 text-lg text-black p-4 hover:bg-opacity-70'> <FaPlay/>  Play</button>
       <button className='bg-gray-500 flex bg-opacity-50 justify-between rounded-md items-center px-12 text-lg text-white p-4'><CiCircleInfo />
       More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle