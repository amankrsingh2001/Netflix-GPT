import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
//   if(!posterPath) {
//     posterPath = "/7Eb1JWK0Cb0rbfsYjwfc9g0PbQH.jpg"
// } This can be done to show all the movie lists but using same images wil make the UI bad and dumb looking so we will just not add the card if the poster_path isn't avilable
if(!posterPath) return 
  return (
    <div className='w-56 h-72 pr-2 cursor-pointer '>
      <img className='w-full h-full' alt='Movie card' src={IMG_CDN_URL+ posterPath }/> 
    </div>
  )
}

export default MovieCard

// /7Eb1JWK0Cb0rbfsYjwfc9g0PbQH.jpg