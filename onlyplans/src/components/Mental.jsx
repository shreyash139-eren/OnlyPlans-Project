// // import React, {useEffect,useState} from "react";
// // import Navbar from "./Navbar";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios"

// // export default function Mental(){
// //     const navigate=useNavigate()
// //     const email=sessionStorage.getItem("email")
// //     const [mood,setMood]=useState("")
// //     const [error,setError]=useState("")
// //     const [fetchError,setFetchError]=useState("")
// //     const today = new Date().toISOString().split("T")[0];
// //     const [data,setData]=useState([])


// //     useEffect(() => {
// //       if (!email) {
// //         navigate("/login");
// //       } else {
// //         fetchData();
// //       }
// //     }, [email, navigate]);

// //       async function handleAdd(e){
// //         e.preventDefault()
// //         if(mood.trim()===""){
// //           setError("Select your mood to add!")
// //           return
// //         }
// //         setFetchError("")
// //         try {
// //           const response=await axios.post("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/mind.json",{
// //             mood: mood,time: today,email:email
// //           })
// //           setMood("")
// //           fetchData()
// //         } catch (error) {
// //           setFetchError(error.message)
          
// //         }
// //       }


// //       async function fetchData(){
// //         setFetchError("")
// //         try {
// //           const response=await axios.get("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/mind.json")
// //           const result=response.data || {}
// //           const loaded = Object.entries(result)
// //         .map(([id, d]) => ({ id, ...d }))
// //         .filter((item) => item.email === email)
// //         .reverse()
// //         setData(loaded)
// //         } catch (error) {
// //           setFetchError(error.message)
// //         }
// //       }

// //     return(
// //         <>
// //         <Navbar/>
// //         <form  onSubmit={handleAdd}>
// //           <select value={mood} onChange={(e)=>setMood(e.target.value)}>
// //             <option value="">Mood</option>
// //             <option value="happy">Happy</option>
// //             <option value="sad">Sad</option>
// //             <option value="angry">Angry</option>
// //             <option value="confused">Confused</option>
// //             <option value="normal">Normal</option>
// //           </select>
// //           <button type="submit">Add</button>
// //           {error && <p>{error}</p>}
// //         </form>
// //         </>
// //     )
// // }






// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import MoodChart from "./moodChart";

// import Particles from "react-tsparticles";
// import Footer from "./Footer";

// export default function Mental() {
//   const navigate = useNavigate();
//   const email = sessionStorage.getItem("email");
//   const [mood, setMood] = useState("");
//   const [error, setError] = useState("");
//   const [fetchError, setFetchError] = useState("");
//   const today = new Date().toISOString().split("T")[0];
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (!email) {
//       navigate("/login");
//     } else {
//       fetchData();
//     }
//   }, [email, navigate]);

//   async function handleAdd(e) {
//     e.preventDefault();
//     if (mood.trim() === "") {
//       setError("⚠️ Please select your mood!");
//       return;
//     }
//     setError("");
//     setFetchError("");
//     try {
//       await axios.post(
//         "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/mind.json",
//         {
//           mood: mood,
//           time: today,
//           email: email,
//         }
//       );
//       setMood("");
//       fetchData();
//     } catch (error) {
//       setFetchError("❌ " + error.message);
//     }
//   }

//   async function fetchData() {
//     setFetchError("");
//     try {
//       const response = await axios.get(
//         "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/mind.json"
//       );
//       const result = response.data || {};
//       const loaded = Object.entries(result)
//         .map(([id, d]) => ({ id, ...d }))
//         .filter((item) => item.email === email)
//         .reverse();
//       setData(loaded);
//     } catch (error) {
//       setFetchError("❌ " + error.message);
//     }
//   }

//   return (
//     <>
//       <Navbar />

//       {/* Particles background */}
//       <Particles
//         options={{
//           fpsLimit: 60,
//           background: {
//             color: "#f9fafb", // light background to match container
//           },
//           interactivity: {
//             detectsOn: "canvas",
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: "repulse", // particles move away from mouse pointer
//               },
//               resize: true,
//             },
//             modes: {
//               repulse: {
//                 distance: 100,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: { value: "#7c3aed" }, // purple-ish color
//             links: {
//               color: "#7c3aed",
//               distance: 120,
//               enable: true,
//               opacity: 0.2,
//               width: 1,
//             },
//             collisions: {
//               enable: false,
//             },
//             move: {
//               directions: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 1,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 40,
//             },
//             opacity: {
//               value: 0.3,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 2, max: 4 },
//             },
//           },
//           detectRetina: true,
//         }}
//         style={{
//           position: "fixed",
//           zIndex: 0,
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//         }}
//       />

//       <div
//         className="container mx-auto p-6 max-w-lg relative z-10"
//         style={{ minHeight: "100vh" }}
//       >
//         <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-purple-200">
//           <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
//             How Are You Feeling Today?
//           </h1>
//           <form onSubmit={handleAdd} className="flex flex-col space-y-5">
//             <select
//               value={mood}
//               onChange={(e) => setMood(e.target.value)}
//               className="p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 transition"
//             >
//               <option value="">Select Your Mood</option>
//               <option value="happy">😊 Happy</option>
//               <option value="sad">😢 Sad</option>
//               <option value="angry">😠 Angry</option>
//               <option value="confused">😕 Confused</option>
//               <option value="normal">😐 Normal</option>
//             </select>
//             <button
//               type="submit"
//               className="bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 active:scale-95 transition-transform duration-150 shadow-md"
//             >
//               Add Mood
//             </button>
//             {error && (
//               <p className="text-red-600 font-medium text-center animate-pulse">
//                 {error}
//               </p>
//             )}
//             {fetchError && (
//               <p className="text-red-600 font-medium text-center">{fetchError}</p>
//             )}
//           </form>
//         </div>

//         {/* Mood History */}
//         <div className="bg-white shadow-lg rounded-lg p-6 border border-purple-200">
//           <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
//             Mood History
//           </h2>
//           {data.length === 0 ? (
//             <p className="text-gray-600 text-center italic">No mood entries yet.</p>
//           ) : (
//             <ul className="max-h-48 overflow-y-auto space-y-2">
//               {data.map(({ id, mood, time }) => (
//                 <li
//                   key={id}
//                   className="flex justify-between items-center border-b border-purple-100 pb-2 last:border-b-0"
//                 >
//                   <span className="font-medium text-purple-800">{time}</span>
//                   <span className="text-purple-600 font-semibold capitalize">{mood}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {/* Mood Chart */}
//           {data.length > 1 && (
//             <div className="mt-10 border-t pt-6">
//               <MoodChart entries={data} />
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MoodChart from "./moodChart";
import Footer from "./Footer";

export default function Mental() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const [mood, setMood] = useState("");
  const [error, setError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!email) {
      navigate("/");
    } else {
      fetchData();
    }
  }, [email, navigate]);

  async function handleAdd(e) {
    e.preventDefault();
    if (mood.trim() === "") {
      setError("⚠️ Please select your mood!");
      return;
    }
    setError("");
    setFetchError("");
    try {
      await axios.post(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/mind.json",
        {
          mood: mood,
          time: today,
          email: email,
        }
      );
      setMood("");
      fetchData();
    } catch (error) {
      setFetchError("❌ " + error.message);
    }
  }

  async function fetchData() {
    setFetchError("");
    try {
      const response = await axios.get(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/mind.json"
      );
      const result = response.data || {};
      const loaded = Object.entries(result)
        .map(([id, d]) => ({ id, ...d }))
        .filter((item) => item.email === email)
        .reverse();
      setData(loaded);
    } catch (error) {
      setFetchError("❌ " + error.message);
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-lg">
          {/* Mood Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-10 border border-purple-200">
            <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              How Are You Feeling Today?
            </h1>
            <form onSubmit={handleAdd} className="flex flex-col space-y-5">
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 transition"
              >
                <option value="">Select Your Mood</option>
                <option value="happy">😊 Happy</option>
                <option value="sad">😢 Sad</option>
                <option value="angry">😠 Angry</option>
                <option value="confused">😕 Confused</option>
                <option value="normal">😐 Normal</option>
              </select>
              <button
                type="submit"
                className="bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 active:scale-95 transition-transform duration-150 shadow-md"
              >
                Add Mood
              </button>
              {error && (
                <p className="text-red-600 font-medium text-center animate-pulse">
                  {error}
                </p>
              )}
              {fetchError && (
                <p className="text-red-600 font-medium text-center">{fetchError}</p>
              )}
            </form>
          </div>

          {/* Mood History */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-purple-200 mb-10">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
              Mood History
            </h2>
            {data.length === 0 ? (
              <p className="text-gray-600 text-center italic">
                No mood entries yet.
              </p>
            ) : (
              <ul className="max-h-48 overflow-y-auto space-y-2">
                {data.map(({ id, mood, time }) => (
                  <li
                    key={id}
                    className="flex justify-between items-center border-b border-purple-100 pb-2 last:border-b-0"
                  >
                    <span className="font-medium text-purple-800">{time}</span>
                    <span className="text-purple-600 font-semibold capitalize">
                      {mood}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Mood Chart */}
            {data.length > 1 && (
              <div className="mt-10 border-t pt-6">
                <MoodChart entries={data} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
