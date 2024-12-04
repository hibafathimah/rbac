import React from 'react'

const PasswordReset = () => {
  return (
    <div className='bg-bluegradient font-pop'>
    <div className="min-h-screen rounded-b-[300px] flex flex-col items-center justify-center bg-bluegradient">
   
    {/* Login Form */}
    <div className="bg-white p-14 max-md:px-7 max-md:py-10 rounded-[48px] shadow-btn max-w-md w-full max-lg:w-[80%] mt-8">
        <h2 className="text-[2rem] max-lg:text-[1.5rem] max-md:text-[1.3rem] font-bold mb-9 max-md:mb-7 text-center text-[#30589f]">Password Reset</h2>
        <form className='font-urban'>


        
            {/* *************** password ************** */}
            <div className="mb-7 max-md:mb-5">
                <input type="password" id="password" placeholder='Password' className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:max-md:text-[0.8rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#30589f] sm:text-sm" />
            </div>

            {/* *************** confirm password ************** */}
            <div className="mb-7 max-md:mb-5">
                <input type="password" id="confirm-password" placeholder='Confirm Password' className="mt-1 block placeholder:text-[#a9a9a9] placeholder:text-[0.9rem] placeholder:max-md:text-[0.8rem] placeholder:tracking-wide w-full px-3 py-2 border-r-0 border-l-0 border-t-0 border-b-[#a9a9a9] focus:outline-none focus:ring-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[#30589f] sm:text-sm" />
            </div>


        {/* *************** signup button ************** */}
        <button type="submit" className="w-full py-3 max-md:py-2 px-4 mt-5  rounded-full shadow-btn text-[1rem] font-bold text-white bg-[#30589f] active:scale-95 transition transform duration-150 focus:outline-none">
            Reset Password
        </button>

        </form>
    </div>
</div>
</div>
  )
}

export default PasswordReset