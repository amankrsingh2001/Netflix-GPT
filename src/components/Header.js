import React, { useEffect} from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';





const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector( store => store.user )
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut = () =>{
    signOut(auth)
    .then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL} = user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate('/browse')
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });

      //unsubscribe when component unmount
      return () => unSubscribe()
      
},[])

const handleGptButton = () =>{
  //Toggle gpt search
  dispatch(toggleGptSearchView())
}

const handleLanguageChange = (e) =>{
      const language = e.target.value
      dispatch(changeLanguage(language))
}

  return (
    <div className='w-screen flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='logo'/>
       {user &&  <div className='flex p-2 justify-between md:m-0'>

          {showGptSearch &&  <select className='p-2 bg-black text-white bg-opacity-70 rounded-md' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            
            </select>}
        <button className='py-2 px-4 bg-[#B91C1B] text-white rounded-md mx-4 my-2'
          onClick={handleGptButton}
        >{showGptSearch?"Home Page":"GPT Search"}</button>
          <img className='w-12 h-12 hidden md:inline-block' src={user?.photoURL} alt='userIcon'/>
          <button onClick={handleSignOut} className='p-2 font-bold mr-8 text-white '>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header