// import React, {useEffect, useState} from "react";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"

// export default function Habit(){
//     const [error,setError]=useState("")
//     const navigate=useNavigate()
//     const email=sessionStorage.getItem("email")
//     const today = new Date().toISOString().split("T")[0];
//     const [habit,setHabit]=useState({habit:"",goal:"",difficulty:"",category:"",streak:0,time:today,email:email})
//     const [data,setData]=useState([])
//     const [fetchError,setFetchError]=useState("")

//     useEffect(() => {
//         if (!email) {
//           navigate("/login");
//         }else {
//           fetchData();
//         }
//       }, [email, navigate]); 


//       async function handleSubmit(e){
//         e.preventDefault()
//         if(!habit.habit || !habit.goal || !habit.difficulty){
//           setError("Please add data!")
//           return
//         }
//         try {
//           const response=await axios.post("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/habit.json",habit)
//           setHabit({habit:"",goal:"",difficulty:"",category:"",streak:0,time:today,email:email})
//           setError("")
//           fetchData()
//         } catch (error) {
//           setFetchError(error.message)
//         }

//       }


//       async function fetchData(){
//         try {
//           const response=await axios.get("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/habit.json")
//           const result= response.data
//           const loaded = Object.entries(result)
//           .map(([id, d]) => ({ id, ...d }))
//           .filter((item) => item.email === email)
//           .reverse();
//           setData(loaded)
//         } catch (error) {
//           setFetchError(error.message)
//         }
//       }


//     return(
//         <>
//         <Navbar/>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Enter Habit" value={habit.habit} onChange={(e)=>setHabit({...habit,habit:e.target.value})}/>
//           <input type="number" placeholder="Goal i.e. 5days" value={habit.goal} onChange={(e)=>setHabit({...habit,goal:e.target.value})}/>
//           <select value={habit.difficulty} onChange={(e)=>setHabit({...habit,difficulty:e.target.value})}>
//             <option value="">Difficulty</option>
//             <option value="easy">Easy</option>
//             <option value="moderate">Moderate</option>
//             <option value="hard">Hard</option>
//           </select>
//           <select value={habit.category} onChange={(e)=>setHabit({...habit,category:e.target.value})}>
//             <option value="">Category</option>
//             <option value="personal development">Personal Development</option>
//             <option value="health">Health</option>
//             <option value="fitnessd">Fitness</option>
//             <option value="wellness">Wellness</option>
//           </select>
//           <button type="submit">Add</button>
//         </form>

//         {error && <p>{error}</p>}

//         <div>
//           {data.length===0?(<p>Please add habits to start!</p>):(
//             data.map((ele)=>(
//               <div>
//               <p>Habit : {ele.habit}</p>
//               <p>Category : {ele.category}</p>
//               <p>Difficulty : {ele.difficulty}</p>
//               <p>Added on : {ele.time}</p>
//               <p>Streak : {ele.streak}</p>
//               <button onClick={()=>addStreak(ele.streak)}>Add streak</button>
//               </div>
//             ))
//           )}
//         </div>
//         </>
//     )
// }









import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Habit() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const today = new Date().toISOString().split("T")[0];

  const [habit, setHabit] = useState({
    habit: "",
    goal: "",
    difficulty: "",
    category: "",
    streak: 0,
    lastUpdated: "",
    time: today,
    email,
  });

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    if (!email){
       navigate("/")
    }
    else {
      fetchData()
    }
  }, [email, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!habit.habit || !habit.goal || !habit.difficulty || !habit.category) {
      setError("Please fill all required fields.");
      return;
    }
    try {
      await axios.post(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/habit.json",
        habit
      );
      setHabit({
        ...habit,
        habit: "",
        goal: "",
        difficulty: "",
        category: "",
        streak: 0,
        lastUpdated: "",
      });
      fetchData();
    } catch (err) {
      setFetchError(err.message);
    }
  }

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/habit.json"
      );
      const list = Object.entries(res.data || {})
        .map(([id, d]) => ({ id, ...d }))
        .filter((h) => h.email === email)
        .reverse();
      setData(list);
    } catch (err) {
      setFetchError(err.message);
    }
  }

  async function addStreak(id, current, last, goal) {
    if (last === today) return;
    if (current >= parseInt(goal)) return;
    try {
      await axios.patch(
        `https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/habit/${id}.json`,
        { streak: current + 1, lastUpdated: today }
      );
      fetchData();
    } catch (err) {
      alert("Error updating streak: " + err.message);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 min-h-screen py-10">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-800 mb-6 text-center">✨ Track a New Habit</h2>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                type="text"
                placeholder="📝 Habit Name"
                value={habit.habit}
                onChange={(e) => setHabit({ ...habit, habit: e.target.value })}
                className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 shadow-sm"
              />
              <input
                type="number"
                placeholder="🎯 Goal (e.g., 5 days)"
                value={habit.goal}
                onChange={(e) => setHabit({ ...habit, goal: e.target.value })}
                className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 shadow-sm"
              />
              <select
                value={habit.difficulty}
                onChange={(e) => setHabit({ ...habit, difficulty: e.target.value })}
                className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 shadow-sm"
              >
                <option value="">Select Difficulty</option>
                <option value="easy">🟢 Easy</option>
                <option value="moderate">🟡 Moderate</option>
                <option value="hard">🔴 Hard</option>
              </select>
              <select
                value={habit.category}
                onChange={(e) => setHabit({ ...habit, category: e.target.value })}
                className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 shadow-sm"
              >
                <option value="">Select Category</option>
                <option value="personal development">🌱 Personal Development</option>
                <option value="health">💊 Health</option>
                <option value="fitness">🏋️ Fitness</option>
                <option value="wellness">🧘 Wellness</option>
              </select>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-md"
              >
                ➕ Add Habit
              </button>
            </form>
            {error && <p className="mt-3 text-red-600 text-center">{error}</p>}
            {fetchError && <p className="mt-3 text-red-600 text-center">{fetchError}</p>}
          </div>

          {/* Habit Cards */}
          <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">📋 Your Habits</h2>
          {data.length === 0 ? (
            <p className="text-center text-gray-500 italic">You haven't added any habits yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.map((h) => {
                const isComplete = parseInt(h.streak) === parseInt(h.goal);
                return (
                  <div
                    key={h.id}
                    className={`rounded-3xl p-6 shadow-xl transition-transform transform hover:scale-[1.02] backdrop-blur-md border ${
                      isComplete ? "bg-green-100/80 border-green-400" : "bg-white/70 border-gray-200"
                    }`}
                  >
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-purple-900">{h.habit}</h3>
                      <p className="text-gray-800">🎯 Goal: <strong>{h.goal} days</strong></p>

                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`px-3 py-1 text-xs rounded-full font-semibold ${
                            h.difficulty === "easy"
                              ? "bg-green-200 text-green-800"
                              : h.difficulty === "moderate"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {h.difficulty}
                        </span>
                        <span className="px-3 py-1 text-xs bg-pink-100 text-pink-800 rounded-full font-semibold">
                          {h.category}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">📅 Added on: {h.time}</p>
                      <p className="text-sm">
                        🔁 Streak:{" "}
                        <span className={`font-bold ${isComplete ? "text-green-700" : "text-purple-700"}`}>
                          {h.streak}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">⏱ Last Updated: {h.lastUpdated || "Never"}</p>
                    </div>

                    <button
                      onClick={() => addStreak(h.id, h.streak, h.lastUpdated, h.goal)}
                      disabled={h.lastUpdated === today || isComplete}
                      className={`mt-5 w-full py-2 rounded-full text-sm font-medium transition ${
                        h.lastUpdated === today || isComplete
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-green-500 text-white hover:bg-green-600 hover:scale-105"
                      }`}
                    >
                      {isComplete
                        ? "✅ Goal Completed"
                        : h.lastUpdated === today
                        ? "✅ Added Today"
                        : "➕ Add Streak"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
