import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION } from '../utils/constant';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';


const useUpcomingMovies = () =>{
    const dispatch = useDispatch()
    const upComingMovies = useSelector(store=>store.movie.upComingMovies)

    const getUpcomingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTION)
        const json = await data.json()
       dispatch(addUpcomingMovies(json.results))
    }       

    useEffect(()=>{
       !upComingMovies && getUpcomingMovies()
    },[])
 }

 export default useUpcomingMovies