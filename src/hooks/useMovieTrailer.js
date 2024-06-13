import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

  
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId +"/videos",
        API_OPTION
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo({trailer}))
    };
    useEffect(() => {
      getMovieVideos();
    }, []);

}
export default useMovieTrailer