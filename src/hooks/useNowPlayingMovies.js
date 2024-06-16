import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useCallback, useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const response = await data.json();
    console.log("*** nowPlayingMovies", response.results);
    dispatch(addNowPlayingMovies(response.results));
  }, [dispatch]);

  useEffect(() => {
    if (nowPlayingMovies === null) {
      getNowPlayingMovies();
    }
  }, [getNowPlayingMovies, nowPlayingMovies]);
};

export default useNowPlayingMovies;
