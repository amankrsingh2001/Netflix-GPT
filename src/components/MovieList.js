import MovieCard from './MovieCard';

const MovieList = ({title,movies}) =>{
   
    return <div className='px-4'> 
            <h1 className='text-3xl py-4 text-white font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        
            <div className='flex '>
            {
              movies && movies.map((movie)=>{return <MovieCard posterPath={movie?.poster_path} />})
            }
      
        </div>
        </div>
       
    </div>
}
export default MovieList