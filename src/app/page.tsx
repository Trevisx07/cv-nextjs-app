"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Purple Gradient Spots Background */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="spot-1"></div>
        <div className="spot-2"></div>
        <div className="spot-3"></div>
      </div>

      {/* Navbar */}
      <nav className="w-full py-4 px-8 shadow-md flex justify-between items-center bg-purple-800/80 backdrop-blur-md fixed top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">Proxima</h1>
        <ul className="flex gap-8 text-lg">
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/job">Job</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/feedback">Feedback</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="text-white bg-purple-600 hover:bg-purple-500 transition-all px-4 py-2 rounded-lg">
            <Link href="/login">Login</Link>
          </button>
          <button className="text-purple-800 bg-white hover:bg-purple-200 transition-all px-4 py-2 rounded-lg">
            <Link href="/signup">Signup</Link>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center w-full px-8 py-16 mt-32 mb-10 gap-8 leading-relaxed">
        {/* Intro Section */}
        <section className="max-w-3xl space-y-6 animate-fadeIn transition-all duration-500">
          <h2 className="text-5xl font-semibold text-purple-800 animate-bounce mb-4">
            No More Solo Job Hunting
          </h2>
          <h3 className="text-3xl font-bold text-purple-700 mb-6">
            " Your path to a standout resume "
          </h3>
          <p className="text-xl text-gray-800 mb-6 animate-slideUp transition-opacity duration-700 ease-in-out">
            Your one-stop solution for Resume Analysis, Personalized Job Suggestions, and Detailed Scoring!
          </p>
          <p className="text-lg text-gray-700 mb-6 animate-slideUp transition-opacity duration-700 ease-in-out">
            Proxima evaluates your resume's structure, keywords, and formatting, giving you insightful feedback to help you stand out. Not only that, but it also provides job recommendations tailored to your profile. Whether you’re just starting or aiming for a senior role, Proxima is here to guide you.
          </p>

          {/* Load More Button */}
          <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-purple-500 hover:scale-105 transition-transform duration-300 ease-in-out">
            Load More
          </button>
        </section>

        {/* Big Card Section */}
        <section className="w-full max-w-xl p-6 mt-10 bg-white shadow-lg rounded-lg border border-gray-200 relative z-[1]">
          <h4 className="text-xl font-bold mb-4">Your Content Here</h4>
          <textarea
            rows={5}
            placeholder="Write anything you want..."
            className="w-full p-4 border border-gray-300 rounded-lg resize-none"
          />
        </section>

        {/* Scrolling Cards Section */}
        <section className="relative w-full max-w-xl mt-10 overflow-hidden shadow-lg rounded-lg bg-white p-[20px] border border-gray-200 z-[1]">
          {/* Container for scrolling cards */}
          <div className="absolute inset-x-[0] top-[0] h-full overflow-hidden flex items-center animate-scrollCards">
            {[...Array(10)].map((_, index) => (
              <div key={index} className={`flex-shrink w-[100px] h-[100px] m-[10px] rounded-full bg-purple-${(index % 5) + 1} animate-moveCard`}></div>
            ))}
          </div>
        </section>

      </main>

      <footer className="w-full py-8 bg-purple-800/80 text-white mt-auto">
  
  {/* Navigation Links Box */}
  <div className="flex justify-center mb-4">
    <div className="bg-purple-700/80 p-4 rounded-lg shadow-lg">
      <div className="flex justify-center space-x-8">
        <Link href="/about" className="hover:text-purple-300">About</Link>
        <Link href="/job" className="hover:text-purple-300">Job</Link>
        <Link href="/feedback" className="hover:text-purple-300">Feedback</Link>
      </div>
    </div>
  </div>

  {/* Follow Us Text */}
  <div className="text-center mt-4">
    <p>Follow us on social media for updates!</p>
  </div>

  {/* Social Media Icons */}
  <div className="flex justify-center space-x-6 mt-2">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/facebook.png" alt="Facebook" className="w-8 h-8 hover:opacity-80" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/linkedin (1).png" alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/twitter.png" alt="Twitter" className="w-8 h-8 hover:opacity-80" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src="/instagram.png" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
    </a>
  </div>

  <hr className="border-t border-gray-400 my-4" />
  
  {/* Copyright Notice */}
  <div className="text-center mt-4">
    <p>© {new Date().getFullYear()} Proxima - All Rights Reserved</p>
  </div>
</footer>
      {/* Styles */}
      <style jsx>{`
        /* Purple Spots Background */
        .spot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.25;
          filter: blur(60px);
          transition: opacity 1.5s ease-in-out;
        }
        
        .spot:nth-child(1) {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #a78bfa, transparent);
          top: 10%;
          left: 20%;
          animation: float 10s ease-in-out infinite;
        }
        
        .spot:nth-child(2) {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #c084fc, transparent);
          top: 60%;
          left: 70%;
          animation: float 12s ease-in-out infinite;
        }
        
        .spot:nth-child(3) {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #d8b4fe, transparent);
          top: 80%;
          left: 30%;
          animation: float 15s ease-in-out infinite;
        }

        /* Keyframe animations */
        @keyframes float {
           0% { transform: translateY(0px); }
           50% { transform: translateY(-20px) translateX(10px); }
           100% { transform: translateY(0px); }
         }

         .animate-fadeIn {
           animation: fadeIn 1.2s ease-in-out forwards;
         }

         .animate-slideUp {
           animation: slideUp 1s ease-in-out forwards;
         }

         .animate-bounce {
           animation: bounce 1.5s infinite alternate;
         }

         @keyframes fadeIn {
           from { opacity: 0; }
           to { opacity: 1; }
         }

         @keyframes slideUp {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
         }

         @keyframes bounce {
           from { transform: translateY(0); }
           to { transform: translateY(-10px); }
         }

         /* Scrolling Cards Animation */
         @keyframes scrollCards {
           from { transform: translateX(100%); }
           to { transform: translateX(-100%); }
         }

         .animate-scrollCards {
           animation: scrollCards linear infinite;
           animation-duration: 20s; /* Adjust speed here */
         }

         .animate-moveCard {
           animation-duration: 10s; /* Adjust speed here */
           background-color: #a78bfa; /* Example color */
         }
       `}</style>
    </div>
  );
}