import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useTrendingMovies = () =>{
    const dispatch = useDispatch()

    const getTrendingMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTION)
      const json = await data.json();
      dispatch(addTrendingMovies(json.results))
   
    }
    
      useEffect(()=>{
        getTrendingMovies()
      },[])
}

export default useTrendingMovies;