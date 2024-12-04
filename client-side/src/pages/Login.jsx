import React from 'react';
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='bg-[#030e2b] font-pop'>
        <div className="min-h-screen rounded-b-[300px] flex flex-col items-center justify-center bg-bluegradient">
        

        {/* Login Form */}
        <div className="bg-white p-7 max-md:px-6 rounded-[48px] shadow-btn max-w-md w-[30%] max-lg:w-[80%] mt-8">
            <h2 className="text-[2rem] max-lg:text-[1.5rem] font-bold
             max-md:text-[1.3rem] mb-6 max-md:mb-2 text-center text-[#30589f]">Login</h2>
            <form className=''>


            {/* *************** email ************** */}
            <div className="mb-5 max-md:mb-2">
                <input type="email" id="email" placeholder='e-mail' className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:max-md:text-[0.8rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#30589f] sm:text-sm" />
            </div>

            {/* *************** password ************** */}
            <div className="mb-5 max-md:mb-2">
                <input type="password" id="password" placeholder='password' className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:max-md:text-[0.8rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#30589f] sm:text-sm" />
            </div>


            {/* *************** Login button ************** */}
            <button type="submit" className="w-full py-3 max-md:py-2 px-4 mt-5  rounded-full shadow-btn text-[1rem] font-bold text-white bg-[#30589f] active:scale-95 transition transform duration-150 focus:outline-none">
                Login
            </button>

            </form>

            <p className="mt-5 text-center text-sm max-md:text-[0.73rem] text-[#a9a9a9] tracking-wide">
            <Link to="/forgotpassword" className="text-[#30589f] font-bold
             hover:underline">Forgot Password </Link>
            </p>
        </div>
    </div>
    </div>
    
  );
};

export default Login;

