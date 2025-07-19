// import React from "react";
// import { Link } from "react-router-dom";

// export default function Intro(){
//     return(
//         <div className="flex justify-between p-2 border-1">
//         <div>
//             <p>OnlyPlans</p>
//         </div>
//         <div>
//             <Link className="hover:text-green-500 mr-3" to={"/login"}>Login</Link>
//             <Link className="hover:text-green-500" to={"/signup"}>Signup</Link>
//         </div>
//         </div>
//     )
// }






import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div>
        <h1 className="text-2xl font-extrabold text-purple-700 cursor-default select-none">
          OnlyPlans
        </h1>
      </div>
      <nav>
        <Link
          to="/login"
          className="text-gray-700 font-medium mr-6 hover:text-green-500 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-gray-700 font-medium hover:text-green-500 transition"
        >
          Signup
        </Link>
      </nav>
    </header>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Intro />

      <main className="flex flex-grow items-center justify-center px-6 py-12 max-w-7xl mx-auto">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Capture Your Thoughts, Plan Your Future
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            OnlyPlans helps you journal your ideas, upload media, and keep track
            of your daily reflections — all in one beautiful, secure place.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/signup"
              className="px-6 py-3 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-800 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 border border-purple-700 text-purple-700 rounded-md font-semibold hover:bg-purple-100 transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 bg-white text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} OnlyPlans. All rights reserved.
      </footer>
    </div>
  );
}
