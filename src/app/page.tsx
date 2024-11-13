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
      <nav className="w-full py-4 px-8 shadow-md flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 fixed top-0 z-50 transition-all duration-500">
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
      <main className="flex-grow flex flex-col items-center justify-center text-center w-full px-8 py-16 mt-32 mb-10 gap-12 leading-relaxed">
        {/* Intro Section */}
        <section className="relative max-w-3xl mx-auto p-8 mb-12">
  <h2 className="text-5xl font-bold text-purple-700 mb-6 animate-bounce">
    No More Solo Job Hunting
  </h2>
  <h3 className="text-3xl font-semibold text-gray-700 mb-6">
    Your path to a standout resume
  </h3>

  {/* Styled Text Box with Animations */}
  <div className="p-6 mb-8 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 shadow-lg rounded-lg border border-purple-300 animate-boxFadeIn hover:scale-105 transition-transform duration-700">
    <p className="text-lg text-white leading-relaxed animate-textFadeIn">
      Welcome to Proxima, where we take your resume to the next level! We’re here to provide you with analysis and recommendations that make a difference. Stand out with structured feedback, keyword insights, and personalized job matches!
    </p>
  </div>
          <p className="text-lg text-gray-800 leading-relaxed animate-textPopUp">
            Proxima does the work to showcase your unique strengths and career goals, from analyzing your resume layout and optimizing keywords to helping you discover the job roles best suited to your expertise. Let's pave the way to a stellar career, together!
          </p>

          {/* Load More Button */}
          <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-purple-500 hover:scale-105 transition-transform duration-300 ease-in-out">
            Load More
          </button>
        </section>

        {/* Wide Card Section */}
        <section className="w-full max-w-4xl p-10 mt-16 bg-white shadow-2xl rounded-lg border border-gray-200 relative z-[1]">
          <h4 className="text-3xl font-bold mb-6 text-purple-800">Discover More with Proxima</h4>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed">
            Ready to enhance your professional journey? Proxima offers tailored tools, insights, and resources to help you build a resume that catches the eye of recruiters. Leverage Proxima's expertise to polish your presentation, streamline your job search, and achieve the career growth you've been aiming for.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With our user-friendly platform, you’ll receive real-time feedback, in-depth scoring, and customized job suggestions—all designed to make your job search smoother and more successful. Join a community that values your growth and puts your potential first.
          </p>

         {/* Scrolling Circles with Company Logos */}
<div className="relative w-full h-24 overflow-hidden mt-6 animate-scrollCircles flex space-x-4">
  {/* Add logos inside each circle */}
  {["/google.png", "/amazon1.png", "/meta1.png", "/microsoft.png", 
    "/apple.png", "/saudiaramco.png", "/nvidia.png", "/flipkart1.png", 
    "/visa.png", "/tesla.png",
   ].map((logo, index) => (
    <div key={index} className="flex-shrink-0 w-20 h-20 rounded-full bg-purple-200 animate-scrollIcons overflow-hidden">
      <img src={logo} alt={`Company Logo ${index + 1}`} className="w-full h-full object-cover" />
    </div>
  ))}
</div>

        </section>
      </main>

      <footer className="w-full py-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-auto"> 
    {/* Navigation Links Box */} 
    <div className="flex justify-center mb-4"> 
        <div className="bg-purple-700/80 p-4 rounded-lg shadow-lg"> 
            <div className="flex justify-center space-x-8"> 
                {['About', 'Job', 'Feedback'].map((item, index) => (
                    <div key={index} className="relative group">
                        <Link href={`/${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-300">
                            {item}
                        </Link>
                        {/* Underline effect */}
                        <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </div>
                ))}
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
          animation: slideUp 1.5s ease-in-out forwards;
        }

        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }

        .animate-scrollIcons {
          animation: scrollIcons 8s linear infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scrollIcons {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
          @keyframes boxFadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes textFadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-boxFadeIn {
  animation: boxFadeIn 1s ease-in-out forwards;
}

.animate-textFadeIn {
  animation: textFadeIn 1.2s ease-in forwards;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.shadow-lg:hover {
  box-shadow: 0 8px 16px rgba(118, 58, 220, 0.4);
}

.bg-gradient-to-br:hover {
  background: linear-gradient(to bottom right, #7c3aed, #9d7fee);
}

      `}</style>
    </div>
  );
}
