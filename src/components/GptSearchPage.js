import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTION, GEMINI_API } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';



const GptSearchPage = () => {
    const langkey = useSelector(store=>store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

      //serach movie in tmdb
      const searchMovieTMDB = async(movie) =>
        {
          const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +movie+ '&include_adult=false&language=en-US&page=1',API_OPTION)
          const json = await data.json()
          return json.results
        }

    const handleGptSearchClick = async () =>{
    //Make an API call to Get the movie results

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 10 movies,comma seperated like the example result given ahead . Example Result: Avenger End Game,Don,Avengers,GolMaal,Koi Mil gya"
    const genAI = new GoogleGenerativeAI(GEMINI_API);
   
    const run = async ()=> {
      // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});  
      const result = await model.generateContent(gptQuery)
      const response = result.response.text().split(",");
      return response;
     }
  
      (async () =>{
        const result = await run()
        const data =result.map((movie) => searchMovieTMDB(movie))
        const tmdbResults =await Promise.all(data)
        dispatch(addGptMovieResult({movieNames:result,movieResults:tmdbResults}))
      })()
 
    // The openai API's is paid so we used the googleStudio Api to make an AI Call 
    //  const gptResults =  await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery}],
    //     model: 'gpt-3.5-turbo',
    //   });
    //   console.log(gptResults.choices)

  }

  return (
    <div className=' pt-[8%] flex justify-center '>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onClick={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' placeholder={lang[langkey].gptSearchPlaceholder} className='p-4 m-4 rounded-md col-span-9' />
            <button  className='py-2 px-4 bg-red-700 text-white rounded-lg m-4 col-span-3' onClick={handleGptSearchClick} >{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchPage