"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 3; // Set how many cards per page
    const jobs = [
        { id: 1, company: 'Google', title: 'Software Engineer', date: '15 Nov 2024', img: '/google.png' },
        { id: 2, company: 'Apple', title: 'Product Manager', date: '16 Nov 2024', img: '/apple.png' },
        { id: 3, company: 'Microsoft', title: 'Data Scientist', date: '17 Nov 2024', img: '/microsoft.png' },
        { id: 4, company: 'Amazon', title: 'Cloud Engineer', date: '18 Nov 2024', img: '/amazon.png' },
        { id: 5, company: 'Facebook', title: 'Frontend Developer', date: '19 Nov 2024', img: '/facebook.png' },
        { id: 6, company: 'Tesla', title: 'Mechanical Engineer', date: '20 Nov 2024', img: '/tesla.png' },
    ];

    // Calculate the index of the first and last job to display on the current page
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const nextPage = () => {
        if (currentPage < Math.ceil(jobs.length / jobsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center bg-white font-sans overflow-hidden">
            {/* Navbar */}
            <nav className="w-full py-4 px-8 shadow-md flex items-center justify-between bg-gradient-to-r from-purple-500 to-indigo-600 fixed top-0 z-50 transition-all duration-500">
                <h1 className="text-2xl font-bold tracking-wide">Proxima</h1>
                {/* Centered Navigation Links */}
                <ul className="flex gap-8 text-lg mx-auto">
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
                {/* Profile Icon on the Right */}
                <div className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                    <Link href="/profile">
                        <img src="/user.png" alt="Profile" className="w-8 h-8 rounded-full" />
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-start mt-32 text-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">Find your dream job now</h2>
                {/* Search Box */}
                <div className="flex items-center border border-gray-300 rounded-lg shadow-md w-full max-w-md p-2">
                    <input type="text" placeholder="Search for jobs..." className="flex-grow p-2 text-lg outline-none" />
                    <button className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
                        Search
                    </button>
                </div>
            </main>

            {/* Job Cards */}
            <div className="mt-10 w-full max-w-4xl mx-auto px-4">
                {currentJobs.map((job) => (
                    <div key={job.id} className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mb-6">
                        {/* Left Side (Icon and Date) */}
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                <img src={job.img} alt={`${job.company} Icon`} className="w-12 h-12 object-cover" />
                            </div>
                            <div className="text-gray-500 text-sm">Posted on: {job.date}</div>
                        </div>
                        {/* Right Side (Job Details and Apply Button) */}
                        <div className="flex-grow ml-6">
                            <div className="text-xl font-semibold text-gray-800">{job.title}</div>
                            <div className="text-lg text-gray-700 mb-2">{job.company}</div>
                            <p className="text-gray-600 text-sm mb-4">
                                Join a dynamic team working on cutting-edge software projects to impact millions of users.
                                <span className="text-purple-500 cursor-pointer hover:underline">read more...</span>
                            </p>
                        </div>
                        {/* Apply Button */}
                        <div className="flex items-center justify-center">
                            <button className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center space-x-4 mb-10">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
                    className="py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
                >
                    Next
                </button>
            </div>
            <div className="fixed right-0 top-20 w-64 bg-white shadow-lg p-6 z-50">
    {/* Companies Section */}
    <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Companies</h3>
        <ul className="space-y-4">
            <li>
                <Link href="/google" className="text-purple-500 hover:underline">Google</Link>
            </li>
            <li>
                <Link href="/apple" className="text-purple-500 hover:underline">Apple</Link>
            </li>
            <li>
                <Link href="/paypal" className="text-purple-500 hover:underline">Paypal</Link>
            </li>
            <li>
                <Link href="/samsung" className="text-purple-500 hover:underline">Samsung</Link>
            </li>
            <li>
                <Link href="/amazon" className="text-purple-500 hover:underline">Amazon</Link>
            </li>
            <li>
                <Link href="/oracle" className="text-purple-500 hover:underline">Oracle</Link>
            </li>
        </ul>
    </div>

    {/* Buttons */}
    <div className="flex space-x-4">
        <button className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
            Apply Filter
        </button>
        <button className="w-full py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300">
            Remove Filter
        </button>
    </div>
</div>


<div className="fixed left-0 top-20 w-64 bg-white shadow-lg p-6 z-50">
    {/* Categories Section */}
    <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
        <ul className="space-y-4">
            <li>
                <Link href="/technology" className="text-purple-500 hover:underline">Technology</Link>
            </li>
            <li>
                <Link href="/marketing" className="text-purple-500 hover:underline">Marketing</Link>
            </li>
            <li>
                <Link href="/finance" className="text-purple-500 hover:underline">Finance</Link>
            </li>
            <li>
                <Link href="/sales" className="text-purple-500 hover:underline">Sales</Link>
            </li>
            <li>
                <Link href="/legal" className="text-purple-500 hover:underline">Legal</Link>
            </li>
        </ul>
    </div>

    {/* Salary Filter Section */}
    <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Salary</h3>
        <input
            type="range"
            min="20000"
            max="100000"
            step="5000"
            className="w-full h-2 bg-gray-200 rounded-lg"
        />
        <div className="flex justify-between text-sm text-gray-600">
            <span>20k</span>
            <span>100k</span>
        </div>
    </div>

    {/* Buttons */}
    <div className="flex space-x-4">
        <button className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
            Apply Filter
        </button>
        <button className="w-full py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300">
            Remove Filter
        </button>
    </div>
</div>

<div className="mt-12 flex justify-center mb-20">
    <Link href="./cv" className="px-8 py-3 text-xl font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 hover:rotate-3">
        Get Your Resume Scanned by Proxima AI
    </Link>
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
