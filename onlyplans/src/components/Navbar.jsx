// import React from "react";
// import { useDispatch,useSelector } from "react-redux";
// import {Link, useNavigate} from "react-router-dom"
// import { logoutUser } from "../auth/authSlice";
// import Todo from "./Todo";

// export default function Navbar(){
//     const {user,loading,error}=useSelector((state)=>state.auth)
//     const dispatch=useDispatch()
//     const navigate=useNavigate()

//     function handleLogout(){
//         dispatch(logoutUser())
//         navigate("/login")
//     }

//     return(
//         <div className="flex justify-between m-2">
//         <div className="flex">
//         <img className="w-8 " src="https://t3.ftcdn.net/jpg/04/23/99/16/360_F_423991638_z7R0pjvAiGnBhkwlD4prkrmqXA6oti1i.jpg" alt="" />
//         <p>OnlyPlans</p>
//         </div>
//         <div className="mr-5 gap-5 flex"> 
//             <Link to={"/home"} className="text-lg mt-1 hover:text-green-500">Home</Link>
//             <Link to={"/habit"} className="text-lg mt-1 hover:text-green-500">Habit Tracker</Link>
//             <Link to={"/mentalHealthTracker"} className="text-lg mt-1 hover:text-green-500">MHT</Link>
//             <Link to={"/journal"} className="text-lg mt-1 hover:text-green-500">Journal</Link>
//             <Link to={"/todo"} className="text-lg mt-1 hover:text-green-500">To-do</Link>
//             <button className="hover:text-red-500 cursor-pointer" onClick={handleLogout}>Logout</button>
//         </div>
//         </div>
//     )
// }













import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/login");
    sessionStorage.clear()
  }

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://t3.ftcdn.net/jpg/04/23/99/16/360_F_423991638_z7R0pjvAiGnBhkwlD4prkrmqXA6oti1i.jpg"
            alt="Logo"
          />
          <span className="text-xl font-bold text-indigo-600">OnlyPlans</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/home" className="hover:text-green-500 transition">Home</Link>
          <Link to="/habit" className="hover:text-green-500 transition">Habit Tracker</Link>
          <Link to="/mentalHealthTracker" className="hover:text-green-500 transition">MHT</Link>
          <Link to="/journal" className="hover:text-green-500 transition">Journal</Link>
          <Link to="/todo" className="hover:text-green-500 transition">To-do</Link>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:underline cursor-pointer"
          >
            Logout
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2 text-gray-700">
          <Link to="/home" className="block hover:text-green-500">Home</Link>
          <Link to="/habit" className="block hover:text-green-500">Habit Tracker</Link>
          <Link to="/mentalHealthTracker" className="block hover:text-green-500">MHT</Link>
          <Link to="/journal" className="block hover:text-green-500">Journal</Link>
          <Link to="/todo" className="block hover:text-green-500">To-do</Link>
          <button
            onClick={handleLogout}
            className="block text-red-500 cursor-pointer hover:underline"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}



