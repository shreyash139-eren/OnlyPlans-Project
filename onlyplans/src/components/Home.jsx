
// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// export default function Home(){
//     const {user,loading,error}=useSelector((state)=>state.auth)
//     const navigate=useNavigate()
//     const email=sessionStorage.getItem("email")

//     useEffect(() => {
//         if (!email) {
//           navigate("/login");
//         }
//       }, [email, navigate]); 

//     return(
//         <>
//           <Link to={"/habit"}>HABIT TRACKER</Link>
//           <Link to={"/mentalHealthTracker"}>MENTAL HEALTH TRACKER</Link>
//           <Link to={"/journal"}>JOURNAL TRACKER</Link>
//           <Link to={"/todo"}>TO-DO</Link>

//         </>
//     )
// }




// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function Home() {
//   const { user, loading, error } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const email = sessionStorage.getItem("email");

//   useEffect(() => {
//     if (!email) {
//       navigate("/login");
//     }
//   }, [email, navigate]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-4 py-8">
//       <h1 className="text-4xl font-extrabold mb-8 text-indigo-600 dark:text-indigo-400">
//         Welcome Back{user?.name ? `, ${user.name}` : ""}!
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">
//         <Link
//           to="/habit"
//           className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
//         >
//           <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
//             Habit Tracker
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400">
//             Track and build your daily habits.
//           </p>
//         </Link>

//         <Link
//           to="/mentalHealthTracker"
//           className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
//         >
//           <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
//             Mental Health Tracker
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400">
//             Monitor your mental wellness regularly.
//           </p>
//         </Link>

//         <Link
//           to="/journal"
//           className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
//         >
//           <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
//             Journal Tracker
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400">
//             Write and reflect on your daily thoughts.
//           </p>
//         </Link>

//         <Link
//           to="/todo"
//           className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
//         >
//           <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
//             To-Do List
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400">
//             Manage your tasks efficiently.
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// }




import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Icons from Heroicons (outline)
const icons = {
  habit: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mx-auto mb-4 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2l4-4M7.5 19a7.5 7.5 0 1 1 9-13.05"
      />
    </svg>
  ),
  mentalHealth: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mx-auto mb-4 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19V6l-2 2m6 8l4-4m1-5h2a2 2 0 0 1 2 2v5a9 9 0 0 1-9 9"
      />
    </svg>
  ),
  journal: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mx-auto mb-4 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20h9M12 4h9M5 12h14M5 20h.01M5 4h.01"
      />
    </svg>
  ),
  todo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mx-auto mb-4 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  ),
};

export default function Home() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  return (
    <>
    <Navbar/>
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-4 py-12
      animate-fadeIn"
      style={{
        animationDuration: "1s",
        animationTimingFunction: "ease-in-out",
      }}
    >
      <h1 className="text-5xl font-extrabold mb-2 text-indigo-600 dark:text-indigo-400 text-center">
        Welcome Back{user?.name ? `, ${user.name}` : ""}!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-xl">
        Here’s your dashboard to track habits, mental health, journal entries, and your to-do list — all in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl w-full">
        <Link
          to="/habit"
          className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
        >
          {icons.habit}
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Habit Tracker
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Track and build your daily habits.
          </p>
        </Link>

        <Link
          to="/mentalHealthTracker"
          className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
        >
          {icons.mentalHealth}
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Mental Health Tracker
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your mental wellness regularly.
          </p>
        </Link>

        <Link
          to="/journal"
          className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
        >
          {icons.journal}
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Journal Tracker
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Write and reflect on your daily thoughts.
          </p>
        </Link>

        <Link
          to="/todo"
          className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"
        >
          {icons.todo}
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            To-Do List
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your tasks efficiently.
          </p>
        </Link>
      </div>

      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 italic max-w-md">
        “The journey of a thousand miles begins with a single step.” – Lao Tzu
      </footer>
    </div>
    <Footer/>
    </>
  );
}
