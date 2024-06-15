import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import BackgroundVideo from './BackgroundVideo';



const MainContainer = () => {
    const movies = useSelector((store)=>store.movie?.nowPlayingMovies)
    if(!movies) return;

    const mainMovies = movies[2];
    const id = mainMovies?.id
    const original = mainMovies?.original_title
    const overview = mainMovies?.overview
 
    
    
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle  title={original} overview={overview}/>
        <BackgroundVideo movieId={id} />
    </div>
  )
}

export default MainContainer