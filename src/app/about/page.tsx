"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white font-sans overflow-hidden">
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

      {/* About Content */}
      <main className="flex flex-col items-center justify-center text-center w-full px-8 py-16 mt-32 mb-24 gap-8 leading-relaxed">
        <h2 className="text-4xl font-semibold text-purple-800 mb-4">About Proxima</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Proxima is your partner in job searching and resume building, providing detailed feedback and customized job recommendations.
        </p>
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
        /* Background Spots */
        .spot-1, .spot-2, .spot-3 {
          position: absolute;
          border-radius: 50%;
          opacity: 0.25;
          filter: blur(60px);
          transition: opacity 1.5s ease-in-out;
        }
        .spot-1 { ... }
        .spot-2 { ... }
        .spot-3 { ... }
        @keyframes float { ... }
      `}</style>
    </div>
  );
}
