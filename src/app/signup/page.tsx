"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Reset the error message if passwords match
    setErrorMessage("");

    // After successful signup, redirect to login page
    console.log("Signup successful:", { email, password });
    router.push("/login");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white font-sans overflow-hidden">
      {/* Purple Gradient Spots Background */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="spot spot-1"></div>
        <div className="spot spot-2"></div>
        <div className="spot spot-3"></div>
      </div>

      {/* Navbar */}
      <nav className="w-full py-4 px-8 shadow-md flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 fixed top-0 z-50 transition-all duration-500">
        <h1 className="text-2xl font-bold tracking-wide text-white">Proxima</h1>
        <ul className="flex gap-8 text-lg text-white">
          {["Home", "About", "Job", "Feedback"].map((item) => (
            <li key={item} className="relative group">
              <Link href={`/${item.toLowerCase()}`} className="hover:text-purple-300 transition-all duration-300">
                {item}
              </Link>
              <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
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

      {/* Signup Card */}
      <main className="flex flex-col items-center justify-center text-center w-full px-8 py-16 mt-32 mb-24 gap-8 leading-relaxed">
        <h2 className="text-4xl font-bold text-purple-800 mb-4 transition-transform transform hover:scale-[1.05] duration-300 ease-in-out">
          Signup
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform transform hover:scale-[1.02] duration-300 ease-in-out shadow-purple-500/50">
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

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
              placeholder="********"
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out">
            Signup
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-600 hover:text-purple-500 transition-all duration-300">
              Login
            </Link>
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-auto">
        <div className="text-center">
          <p>Follow us on social media for updates!</p>
          <div className="flex justify-center space-x-6 mt-2">
            {["facebook", "linkedin", "twitter", "instagram"].map((platform) => (
              <a href="#" key={platform} target="_blank" rel="noopener noreferrer">
                <img src={`/${platform}.png`} alt={platform} className="w-8 h-8 hover:opacity-80" />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-400 my-4" />

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
        .spot-1 {
          width: 200px;
          height: 200px;
          top: 5%;
          left: 10%;
          background-color: rgba(175, 0, 255, 0.2);
          filter: blur(75px);
        }
        .spot-2 {
          width: 300px;
          height: 300px;
          top: 20%;
          right: 15%;
          background-color: rgba(0, 100, 255, 0.2);
          filter: blur(100px);
        }
        .spot-3 {
          width: 250px;
          height: 250px;
          bottom: 15%;
          left: 25%;
          background-color: rgba(255, 0, 150, 0.2);
          filter: blur(75px);
        }
      `}</style>
    </div>
  );
}
