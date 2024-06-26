import { createSlice } from "@reduxjs/toolkit";


const moviesSlice =  createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
})


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer