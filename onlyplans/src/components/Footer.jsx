// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 select-none">
//       {/* Developer Info */}
//       <div className="mb-4 md:mb-0 text-center md:text-left">
//         Developed and managed by{" "}
//         <span className="font-semibold text-purple-700">Your Name</span>
//       </div>

//       {/* Social Links */}
//       <div className="flex space-x-6">
//         {/* GitHub */}
//         <a
//           href="https://github.com/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="GitHub"
//           className="hover:text-purple-700 transition"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 016 0c2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .315.21.69.825.57C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
//           </svg>
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://linkedin.com/in/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//           className="hover:text-purple-700 transition"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.938v5.668h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zM6.97 20.452H3.703V9h3.267v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.277V1.723C24 .77 23.2 0 22.225 0z" />
//           </svg>
//         </a>

//         {/* Instagram */}
//         <a
//           href="https://instagram.com/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Instagram"
//           className="hover:text-purple-700 transition"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.25 0 1.12 1.12 0 012.25 0z" />
//           </svg>
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="mt-4 md:mt-0 text-center md:text-right text-sm text-gray-400">
//         &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//       </div>
//     </footer>
//   );
// }



// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-extrabold text-purple-700">OnlyPlans</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your all-in-one journaling and productivity companion. Track habits,
            write your thoughts, and plan with purpose.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-purple-600">Home</Link></li>
            <li><Link to="/habit" className="hover:text-purple-600">Habit Tracker</Link></li>
            <li><Link to="/journal" className="hover:text-purple-600">Journal</Link></li>
            <li><Link to="/todo" className="hover:text-purple-600">To-Do</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:shreyash.sinha35@gmail.com" className="text-purple-600 hover:underline">OnlyPlans</a></li>
            <li>Address: <span>123 Mindful Lane, Productivity City</span></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl mt-2">
            <a
              href="https://github.com/shreyash139-eren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-700"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-shreyash-84079b205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-700"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/kumar_shreyash_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-700"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500 bg-gray-50">
        <p>&copy; {new Date().getFullYear()} OnlyPlans. All rights reserved.</p>
        <p className="mt-1">
          Developed and managed by <span className="font-medium text-purple-700">Kumar Shreyash</span>
        </p>
      </div>
    </footer>
  );
}
