import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bluegradient font-pop">
      <div className="max-w-3xl text-center bg-white shadow-btn rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#30589f] mb-4">
          Welcome to Dashnix!
        </h1>
        
        <div className="mt-6">
          <button className="px-6 py-2 bg-[#30589f] text-white shadow-btn rounded-md hover:bg-blue-700 transition duration-300">
            <Link to='/signup'>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
