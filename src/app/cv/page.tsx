"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen flex flex-col items-center bg-white font-sans overflow-hidden">
            {/* Purple Gradient Spots Background */}
            <div className="absolute inset-0 -z-10 bg-white">
                <div className="spot-1"></div>
                <div className="spot-2"></div>
                <div className="spot-3"></div>
            </div>

            {/* Navbar */}
            <nav className="w-full py-4 px-8 shadow-md flex items-center justify-between bg-gradient-to-r from-purple-500 to-indigo-600 fixed top-0 z-50 transition-all duration-500">
                <h1 className="text-2xl font-bold tracking-wide text-white">Proxima</h1>

                {/* Centered Navigation Links */}
                <ul className="flex gap-8 text-lg mx-auto">
                    <li className="hover:text-purple-300 transition-all duration-300 text-white">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-purple-300 transition-all duration-300 text-white">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-purple-300 transition-all duration-300 text-white">
                        <Link href="/job">Job</Link>
                    </li>
                    <li className="hover:text-purple-300 transition-all duration-300 text-white">
                        <Link href="/feedback">Feedback</Link>
                    </li>
                </ul>

                {/* Profile Icon on the Right */}
                <div className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                    <Link href="/profile">
                        <img src="/User.png" alt="Profile" className="w-8 h-8 rounded-full" />
                    </Link>
                </div>
            </nav>

            {/* Welcome Section */}
            <section className="flex flex-col items-center justify-center mt-32 px-4">
                <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate__animated animate__fadeInUp">
                    Welcome to Proxima AI
                </h2>
                <p className="mt-4 text-xl text-gray-700 text-center animate__animated animate__fadeIn animate__delay-1s">
                    The future of job description analysis is here!
                </p>
            </section>

            {/* Job Description Section */}
            <section className="flex flex-col items-center mt-24 px-4">
                <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 animate__animated animate__fadeInUp">
                    Give Your Job Description
                </h3>
                <textarea
  placeholder="Write your job description here..."
  className="mt-6 w-full max-w-5xl h-48 p-4 bg-gray-100 rounded-lg border border-gray-300 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-lg"
/>

            </section>

            {/* Resume Upload Section */}
{/* Upload Resume Section */}
<div className="mt-16 mb-16 max-w-5xl mx-auto p-12 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transform">
  <h2 className="text-4xl font-extrabold text-white mb-6 text-center transition-all duration-500 hover:text-purple-200">
    Upload Your Resume
  </h2>
  <div className="flex flex-col items-center justify-center space-y-6">
    <div className="flex flex-col items-center justify-center space-x-4 w-full">
      {/* File Input */}
      <input
        type="file"
        className="file:border-0 file:bg-gradient-to-r file:from-purple-700 file:to-indigo-600 file:text-white file:px-10 file:py-4 file:rounded-lg file:shadow-lg file:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105"
      />
      {/* Add some space between the file input and the button */}
      <div className="mt-6">
        {/* Upload Button */}
        <button className="text-white font-semibold py-3 px-8 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
          Upload
        </button>
      </div>
    </div>
    {/* Instructions or extra text */}
    <p className="text-white text-lg text-center mt-4 font-medium opacity-80">
      Drag and drop your resume or click to select a file.
    </p>
  </div>
</div>


{/* Get ATS Score Button Section */}
{/* Get ATS Score Button Section */}
<div className="flex justify-center mt-12 mb-10">
  <button className="text-white font-bold py-4 px-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
    Get ATS Score
  </button>
</div>


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
