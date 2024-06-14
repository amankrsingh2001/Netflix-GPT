import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const loginHandler = (e) => {
    e.preventDefault();
    setisLogin(!isLogin);
  };

  const loginButtonHandler = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
      });
  };

  const signUpButtonHandler = (e) => {
    e.preventDefault();
    const emailValid = email.current.value;
    const passwordValid = password.current.value;
    const message = checkValidData(
      emailValid,
      passwordValid,
      name.current.value
    );
    setErrorMessage(message);
    if (message) return;
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        }).catch((error) => {
         setErrorMessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
        // ..
      });
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="backgroundImage"
        />
      </div>
      {isLogin === true ? (
        <form className="px-14 py-12 bg-black absolute w-3/12  my-36 mx-auto right-0 left-0 to-transparent text-white  bg-opacity-80 flex flex-col rounded-s-xl">
          <h1 className="font-bold text-3xl py-4">Sign In</h1>
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-2 w-full bg-transparent border-[1px] border-slate-500 outline-none rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-transparent  border-[1px]  border-slate-500 rounded-md"
          />
          <p className="text-[#E50815] m-2 p-2 font-bold text-md">
            {errorMessage}
          </p>
          <button
            className="py-2 my-2 bg-[#E50815] rounded-md w-full"
            onClick={loginButtonHandler}
          >
            Sign In
          </button>

          <h1 className="m-auto py-4 text-slate-400">OR</h1>

          <button className="w-full py-2 bg-[#353434] bg-opacity-80 rounded-md">
            Use a sign-in code
          </button>

          <a className="m-auto py-6" href="not">
            Forget Password?
          </a>

          <div>
            <input
              className="p-4 my-2  bg-transparent border-[1px] outline-none rounded-md"
              type="checkbox"
              id="check"
            />
            <lable className="ml-2 cursor-pointer">Remember Me</lable>
          </div>

          <div className="flex">
            <h3 className="py-2 my-2  text-[#868484] ">New to Netflix?</h3>
            <a className="py-2 m-2" href="/" onClick={loginHandler}>
              Sign up Now.
            </a>
          </div>

          <div className="font-sm">
            <p className="text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot<a href="/">.Learn more</a>
            </p>
          </div>
        </form>
      ) : (
        <form className="px-14 py-12 bg-black absolute w-3/12  my-24 mx-auto right-0 left-0 to-transparent text-white  bg-opacity-80 flex flex-col rounded-s-xl">
          <h1 className="font-bold text-3xl py-4">Sign Up</h1>
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-transparent border-[1px] border-slate-500 outline-none rounded-md"
          />
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-2 w-full bg-transparent border-[1px] border-slate-500 outline-none rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-transparent  border-[1px]  border-slate-500 rounded-md"
          />
          <p>{errorMessage}</p>
          <button
            className="py-2 my-2 bg-[#E50815] rounded-md w-full"
            onClick={signUpButtonHandler}
          >
            Sign UP
          </button>

          <h1 className="m-auto py-4 text-slate-400">OR</h1>

          <button className="w-full py-2 bg-[#353434] bg-opacity-80 rounded-md">
            Use a sign-in code
          </button>

          <a className="m-auto py-6" href="not">
            Forget Password?
          </a>

          <div>
            <input
              className="p-4 my-2  bg-transparent border-[1px] border-slate-500 outline-none rounded-md"
              type="checkbox"
              id="check"
            />
            <lable className="ml-2  cursor-pointer">Remember Me</lable>
          </div>
          <div className="flex">
            <h3 className="py-2 my-2  text-[#868484] ">Already registred ?</h3>
            <a className="py-2 m-2" href="/" onClick={loginHandler}>
              {" "}
              Login in.
            </a>
          </div>
          <div className="font-sm">
            <p className="text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot<a href="/">.Learn more</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
