"use client";
import Link from "next/link";
import { useState } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleFeedbackSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle feedback submission logic here
    console.log("Feedback submitted:", { name, email, feedback, rating });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white font-sans overflow-hidden">
      {/* Background Gradient Spots */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="spot-1"></div>
        <div className="spot-2"></div>
        <div className="spot-3"></div>
      </div>

      {/* Navbar */}
      <nav className="w-full py-4 px-8 shadow-md flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 fixed top-0 z-50 transition-all duration-500 ">
  <h1 className="text-2xl font-bold tracking-wide">Proxima</h1>
  <ul className="flex gap-8 text-lg">
    <li className="relative group hover:text-purple-300 transition-all duration-300">
      <Link href="/">Home</Link>
      <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </li>
    <li className="relative group hover:text-purple-300 transition-all duration-300">
      <Link href="/about">About</Link>
      <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </li>
    <li className="relative group hover:text-purple-300 transition-all duration-300">
      <Link href="/job">Job</Link>
      <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </li>
    <li className="relative group hover:text-purple-300 transition-all duration-300">
      <Link href="/feedback">Feedback</Link>
      <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
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

      {/* Feedback Card */}
      <main className="flex flex-col items-center justify-center text-center w-full px-8 py-16 mt-32 mb-24 gap-8 leading-relaxed">
        <h2 className="text-4xl font-bold text-purple-800 mb-4 transition-transform transform hover:scale-[1.05] duration-300 ease-in-out">Feedback</h2>

        <form onSubmit={handleFeedbackSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform transform hover:scale-[1.02] duration-300 ease-in-out shadow-purple-500/50">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
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

          {/* Star Rating */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            {/* Centering the stars using flexbox */}
            <div className="flex justify-center space-x-1 cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  onClick={() => setRating(star)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star <= rating ? "yellow" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-8 h-8 transition-colors duration-200 ${star <= rating ? "hover:opacity-[0.75]" : "hover:text-yellow-500"}`}
                >
                  <path d="M12 .587l3.668 7.568L24 9.587l-6 5.848L19.335 24 12 20.896 4.665 24l1.335-8.565L0 9.587l7.332-.432z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Feedback Message Field */}
          <div className="mb-6">
            <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">Your Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
              placeholder="Share your thoughts..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-purple600 hover:bg-purple500 text-white font-bold py2 px4 rounded focus:outline-none focus:shadow-outline transition-all duration300 ease-in-out">
            Submit Feedback
          </button>
        </form>
      </main>

      {/* Footer */}
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