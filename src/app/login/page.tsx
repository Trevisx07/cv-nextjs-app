"use client";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

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

      {/* Login Card */}
      <main className="flex flex-col items-center justify-center text-center w-full px-8 py-16 mt-32 mb-24 gap-8 leading-relaxed">
        <h2 className="text-4xl font-bold text-purple-800 mb-4 transition-transform transform hover:scale-[1.05] duration-300 ease-in-out">Login</h2>

        {/* Login Card */}
        <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform transform hover:scale-[1.02] duration-300 ease-in-out shadow-purple-500/50">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
              placeholder="********"
            />
          </div>

          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out">
            Login
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-purple-600 hover:text-purple-500 transition-all duration-300">Sign up</Link>
          </p>
        </form>
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

      {/* Styles for gradient background and animations */}
      <style jsx>{`
        .spot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
        }
        
        .spot:nth-child(1) {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(128,0,128,1) 100%);
          top: 20%;
          left: 10%;
        }

        .spot:nth-child(2) {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(128,0,128,1) 100%);
          top: 60%;
          right: 15%;
        }

        .spot:nth-child(3) {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(128,0,128,1) 100%);
          bottom: 30%;
          left: 40%;
        }
      `}</style>
    </div>
  );
}