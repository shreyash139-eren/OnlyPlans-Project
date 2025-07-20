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






// import React from "react";
// import { Link } from "react-router-dom";

// function Intro() {
//   return (
//     <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
//       <div>
//         <h1 className="text-2xl font-extrabold text-purple-700 cursor-default select-none">
//           OnlyPlans
//         </h1>
//       </div>
//       <nav>
//         <Link
//           to="/login"
//           className="text-gray-700 font-medium mr-6 hover:text-green-500 transition"
//         >
//           Login
//         </Link>
//         <Link
//           to="/signup"
//           className="text-gray-700 font-medium hover:text-green-500 transition"
//         >
//           Signup
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Intro />

//       <main className="flex flex-grow items-center justify-center px-6 py-12 max-w-7xl mx-auto">
//         <div className="max-w-4xl text-center">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
//             Capture Your Thoughts, Plan Your Future
//           </h2>
//           <p className="text-lg text-gray-700 mb-8">
//             OnlyPlans helps you journal your ideas, upload media, and keep track
//             of your daily reflections — all in one beautiful, secure place.
//           </p>
//           <div className="flex justify-center space-x-6">
//             <Link
//               to="/signup"
//               className="px-6 py-3 bg-purple-700 text-white rounded-md font-semibold hover:bg-purple-800 transition"
//             >
//               Get Started
//             </Link>
//             <Link
//               to="/login"
//               className="px-6 py-3 border border-purple-700 text-purple-700 rounded-md font-semibold hover:bg-purple-100 transition"
//             >
//               Log In
//             </Link>
//           </div>
//         </div>
//       </main>

//       <footer className="py-6 bg-white text-center text-gray-500 text-sm select-none">
//         &copy; {new Date().getFullYear()} OnlyPlans. All rights reserved.
//       </footer>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://t3.ftcdn.net/jpg/04/23/99/16/360_F_423991638_z7R0pjvAiGnBhkwlD4prkrmqXA6oti1i.jpg"
            alt="Logo"
          />
          <span className="text-xl font-bold text-indigo-600">OnlyPlans</span>
        </div>
      <nav aria-label="Primary Navigation">
        <Link
          to="/login"
          className="text-gray-700 font-medium mr-6 hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-gray-700 font-medium hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
        >
          Signup
        </Link>
      </nav>
    </header>
  );
}

// Counter that animates number up to a target value
function UserCounter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
    const increment = target / (duration / 50); // update every 50ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-white text-center mb-10 select-none">
      <p className="text-5xl font-extrabold">{count.toLocaleString()}</p>
      <p className="text-lg font-medium mt-1">Happy Users</p>
    </div>
  );
}

function Testimonial({ quote, author }) {
  return (
    <blockquote className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto text-center">
      <p className="italic text-gray-700 mb-4">&quot;{quote}&quot;</p>
      <footer className="font-semibold text-purple-700">— {author}</footer>
    </blockquote>
  );
}

function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "OnlyPlans helped me stay organized and reflect daily. The clean UI and seamless experience make planning enjoyable!",
      author: "Jamie L.",
    },
    {
      quote:
        "A wonderful app for journaling and planning. The media upload feature is a game changer!",
      author: "Ravi K.",
    },
    {
      quote:
        "I love how secure and beautiful this app is. It truly helps me keep track of my thoughts every day.",
      author: "Anita P.",
    },
    {
      quote:
        "OnlyPlans motivates me to reflect regularly and stay on top of my goals. Highly recommend!",
      author: "Marcus T.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 my-16">
      <h2 className="text-3xl font-extrabold text-white text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map(({ quote, author }, idx) => (
          <Testimonial key={idx} quote={quote} author={author} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 bg-white text-center text-gray-500 text-sm select-none flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-4">
      <div>
        Developed and managed by{" "}
        <span className="font-semibold text-purple-700">Kumar Shreyash</span>
      </div>
      <div className="flex space-x-6 justify-center md:justify-end">
        {/* GitHub */}
        <a
          href="https://github.com/shreyash139-eren"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-purple-700 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 016 0c2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .315.21.69.825.57C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kumar-shreyash-84079b205"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-700 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.938v5.668h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM6.97 20.452H3.703V9h3.267v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.277V1.723C24 .77 23.2 0 22.225 0z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/kumar_shreyash_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-purple-700 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.25 0 1.12 1.12 0 012.25 0z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex flex-col">
      <Intro />

      <main className="flex flex-grow flex-col items-center justify-center px-6 py-12 max-w-7xl mx-auto w-full">
        <UserCounter target={12890} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Capture Your Thoughts, Plan Your Future
            </h2>
            <p className="text-purple-200 mb-10 max-w-lg mx-auto md:mx-0 drop-shadow-md">
              OnlyPlans helps you journal your ideas, upload media, and keep track
              of your daily reflections — all in one beautiful, secure place.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link
                to="/signup"
                className="px-6 py-3 bg-white bg-opacity-90 text-purple-700 rounded-md font-semibold hover:bg-opacity-100 transition focus:outline-none focus:ring-4 focus:ring-white"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-purple-700 transition focus:outline-none focus:ring-4 focus:ring-white"
              >
                Log In
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Person planning and journaling"
              className="rounded-xl shadow-xl max-w-full mx-auto"
            />
          </div>
        </div>

        {/* Reviews Section */}
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
