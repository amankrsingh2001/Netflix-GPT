import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const usePopularMovies = () =>{
    const dispatch = useDispatch()
    const popularMovies = useSelector(store=>store.movie.popularMovies)

    const getPopularMovies = useCallback( () => async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTION)
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
   
    },[dispatch])
    
      useEffect(()=>{
      !popularMovies && getPopularMovies()
      },[getPopularMovies,popularMovies])
}

export default usePopularMovies;