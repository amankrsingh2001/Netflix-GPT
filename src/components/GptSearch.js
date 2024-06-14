import React from 'react'
import GptSearchPage from './GptSearchPage'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div >
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="backgroundImage"
        />
      </div>
      <GptSearchPage/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch