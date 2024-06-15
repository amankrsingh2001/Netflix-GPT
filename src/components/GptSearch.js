import React from 'react'
import GptSearchPage from './GptSearchPage'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
     <div className="fixed -z-10">
        <img
        className='h-screen md:w-screen object-cover'
          src={BG_URL}
          alt="backgroundImage"
        />
      </div>
      <div className=''>
     
      <GptSearchPage/>
      <GptMovieSuggestion/>
    </div>
    
    </>
    
  )
}

export default GptSearch