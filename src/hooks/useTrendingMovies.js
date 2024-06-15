import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useTrendingMovies = () =>{
    const dispatch = useDispatch()
    const trendingMovies = useSelector(store=>store.movie.trendingVideos)

    const getTrendingMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTION)
      const json = await data.json();
      dispatch(addTrendingMovies(json.results))
   
    }
    
      useEffect(()=>{
        !trendingMovies && getTrendingMovies()
      },[getTrendingMovies,trendingMovies])
}

export default useTrendingMovies;