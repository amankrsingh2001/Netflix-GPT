import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-56 pr-2'>
      <img className='h-' alt='Movie card' src={IMG_CDN_URL+ posterPath}/>
    </div>
  )
}

export default MovieCard