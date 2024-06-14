import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie)



  return (
      <div className=' bg-black pl-10'>
    <div className='-mt-60 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular "} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
      </div>

      {
        /* Movie List - Popular
        Movie Card 
            Movie List - Now playing 
            Movie List - Trending
            Movie List - Horror
          */
      }
    </div>
  )
}

export default SecondaryContainer