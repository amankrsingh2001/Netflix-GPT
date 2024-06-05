import React from "react";
import Header from "./Header";
import { useState } from "react";



const Login = () => {
const [isLogin,setisLogin] = useState(true);


const loginHandler = (e) =>{
  e.preventDefault();
  setisLogin(!isLogin)
}
 


  return (
    
    <div className="">
      <Header />

      <div className="absolute">
          
          <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        />
           
      </div>
      
     {
      isLogin === true? 
        <form className="px-14 py-12 bg-black absolute w-3/12  my-36 mx-auto right-0 left-0 to-transparent text-white  bg-opacity-80 flex flex-col rounded-s-xl"  >
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
      <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-transparent border-[1px] border-slate-500 outline-none rounded-md"/>
      <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-transparent  border-[1px]  border-slate-500 rounded-md" />
      <button className="py-2 my-2 bg-[#E50815] rounded-md w-full" >Sign In</button>

      <h1 className="m-auto py-4 text-slate-400">OR</h1>

      <button className="w-full py-2 bg-[#353434] bg-opacity-80 rounded-md">Use a sign-in code</button>

      <a className="m-auto py-6" href="not">Forget Password?</a>
      
      <div>
      <input className="p-4 my-2  bg-transparent border-[1px] border-slate-500 outline-none rounded-md" type="checkbox" id="check"/>
      <lable className="ml-2 cursor-pointer">Remember Me</lable>
      </div>

      <div className="flex">
        <h3 className="py-2 my-2  text-[#868484] ">New to Netflix?</h3>
        <a className="py-2 m-2" href="/" onClick={loginHandler}>Sign up Now.</a>
      </div>

      <div className="font-sm">
        <p className="text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot<a href="/">.Learn more</a></p>

      </div>


      </form>
      
       :  <form className="px-14 py-12 bg-black absolute w-3/12  my-24 mx-auto right-0 left-0 to-transparent text-white  bg-opacity-80 flex flex-col rounded-s-xl">
       <h1 className="font-bold text-3xl py-4">Sign Up</h1>
     <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-transparent border-[1px] border-slate-500 outline-none rounded-md"/>
     <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-transparent border-[1px] border-slate-500 outline-none rounded-md"/>
     <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-transparent  border-[1px]  border-slate-500 rounded-md" />
     <button className="py-2 my-2 bg-[#E50815] rounded-md w-full">Sign UP</button>

     <h1 className="m-auto py-4 text-slate-400">OR</h1>

     <button className="w-full py-2 bg-[#353434] bg-opacity-80 rounded-md">Use a sign-in code</button>

     <a className="m-auto py-6" href="not">Forget Password?</a>
     
     <div>
     <input className="p-4 my-2  bg-transparent border-[1px] border-slate-500 outline-none rounded-md" type="checkbox" id="check"/>
     <lable className="ml-2 cursor-pointer">Remember Me</lable>
     </div>

     <div className="flex">
       <h3 className="py-2 my-2  text-[#868484] ">Already registred ?</h3>
       <a className="py-2 m-2" href="/" onClick={loginHandler}> Login in.</a>
     </div>

     <div className="font-sm">
       <p className="text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot<a href="/">.Learn more</a></p>

     </div>


     </form>
     
     }
  

    </div>
  );
};

export default Login;
