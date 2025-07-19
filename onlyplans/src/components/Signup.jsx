// import React, { useState } from "react";
// import {useDispatch,useSelector} from "react-redux"
// import {signupUser} from "../auth/authSlice"
// import {Link, useNavigate} from "react-router-dom"

// export default function Signup(){
//     const dispatch=useDispatch()
//     const {user,loading,error}=useSelector((state)=>state.auth)
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [name,setName]=useState("")
//     const [formError,setFormError]=useState("")
//     const navigate=useNavigate()

//     function handleSubmit(e){
//         e.preventDefault()
//         if(!email || !password || !name){
//             setFormError("Please enter Valid Credentials!")
//             return
//         }
//         if(password.trim().length<6){
//             setFormError("Password should be atleast 6 characters long!")
//             return
//         }
//         setFormError("")
//         dispatch(signupUser({email,password,name}))
//         navigate("/login")
//     }

//     return(
//         <div className="h-[100vh] flex justify-center items-center">
//         <div className="grid border-1 p-10 rounded-3xl">
//             <p className="block text-center text-2xl font-bold mb-5">Signup</p>
//             <form onSubmit={handleSubmit}>
//                 <input className="block w-80 px-3 py-1 border-1 mb-5" type="text" value={name} placeholder="Enter Your Name..." onChange={(e)=>setName(e.target.value)}  />
//                 <input className="block w-80 px-3 py-1 border-1 mb-5" type="email" value={email} placeholder="Enter email..." onChange={(e)=>setEmail(e.target.value)}  />
//                 <input className="block w-80 px-3 py-1 border-1 mb-5" type="password" value={password} placeholder="******" onChange={(e)=>setPassword(e.target.value)}  />
//                 {formError && <div className="mb-3">{formError}</div>}
//                 {error && <div className="mb-3">{error}</div>}
//                 <button className="border-1 px-2 py-1 mb-3" type="submit" disabled={loading}>{loading?"signing up...":"Signup"}</button>
//                 <p className="text-center">Already have an account? <Link className="text-blue-500 hover:text-green-400" to={"/login"}>Login</Link></p>
//             </form>
//         </div>
//         </div>
//     )
// }







import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !name) {
      setFormError("Please enter valid credentials!");
      return;
    }
    if (password.trim().length < 6) {
      setFormError("Password should be at least 6 characters long!");
      return;
    }
    setFormError("");
    dispatch(signupUser({ email, password, name }));
    navigate("/login");
  }

  return (
    <>
    <Link to={"/"}>OnlyPlans</Link>
    <div className="h-screen w-full flex bg-[#f5f6f8] p-8">
      {/* Left Panel - Signup Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg border">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
            Create Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            {(formError || error) && (
              <p className="text-red-500 text-sm">{formError || error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition flex justify-center items-center"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : null}
              {loading ? "Signing Up..." : "Signup"}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 hover:text-purple-800 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white border-l p-8">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
          alt="Join Us"
          className="rounded-lg mb-8 max-w-full shadow-md"
        />
        <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
          Join Our Community
        </h2>
        <p className="text-gray-600 text-center max-w-sm">
          Sign up today to unlock exclusive features and stay connected with
          like-minded individuals. Your journey starts here.
        </p>
      </div>
    </div>
    </>
  );
}
