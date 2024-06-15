import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store=>store.movie.nowPlayingMovies)

    const getNowPlayingMovies =useCallback(()=>async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTION)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
   
    },[dispatch])
    
      useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies()
      },[getNowPlayingMovies,nowPlayingMovies])
}

export default useNowPlayingMovies;