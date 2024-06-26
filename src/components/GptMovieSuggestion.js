import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestion = () => {
  const {movieNames,movieResults} = useSelector(store=>store.gpt)
  if(!movieNames) return null;

  return (
    <div className='m-4 p-4 bg-black bg-opacity-75 text-white'>
      <div>
        {
          movieNames.map(((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>))
        }
       {}
      </div>
    </div>
  )
}

export default GptMovieSuggestion