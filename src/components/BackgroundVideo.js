import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const BackgroundVideo = ({ movieId }) => {
  const trailerVideo = useSelector(store=>store.movie?.trailerVideo)
  useMovieTrailer(movieId)

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src= {"https://www.youtube.com/embed/" + trailerVideo?.trailer?.key + `?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
