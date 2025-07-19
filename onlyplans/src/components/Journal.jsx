// import React,{useEffect, useState} from "react";
// import Navbar from "./Navbar";
// import axios from "axios"

// export default function Journal(){
//     const email=sessionStorage.getItem("email")
//     const [media,setMedia]=useState("")
//     const [entry,setEntry]=useState("")
//     const [journal,setJournal]=useState([])
//     const [error,setError]=useState("")
//     const time=new Date(Date.now()).toISOString().split("T")[0]



//     async function handleSubmit(e){
//         e.preventDefault()
//         if(entry.trim()===""){
//             setError("Thoughts can't be empty")
//             return
//         }

//         try {
//             const response=await axios.post("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/journals.json",{
//                 media,entry,email,time
//             })
//             setEntry("")
//             setMedia("")
//             setError("")
//             fetchData()
//         } catch (error) {
//             setError(error.message)
//         }
//     }


//     async function fetchData(){
//         try {
//             const response= await axios.get("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/journals.json")
//             const result=response.data
//             const loaded = Object.entries(result)
//                 .map(([id, data]) => ({
//                   id,
//                   ...data,
//                 }))
//                 .filter((item) => item.email === email)
//                 setJournal(loaded)
//         } catch (error) {
//             setError(error.message)
//         }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])


//     return(
//         <>
//         <Navbar/>
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Photo or video link" value={media} onChange={(e)=>setMedia(e.target.value)}/>
//             <input type="text" placeholder="Your Thoughts" value={entry} onChange={(e)=>setEntry(e.target.value)}/>
//             {error && <p>{error}</p>}
//             <button type="submit">Add Entry</button>
//         </form>

//         <div>
//             {journal.map((ele)=>{
//                 <div>
//                     <img src={ele.media} alt="" />
//                     <p>{ele.entry}</p>
//                     <p>{ele.time}</p>
//                 </div>
//             })}
//         </div>
//         </>
//     )
// }












import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Journal() {
  const email = sessionStorage.getItem("email");
  const [mediaUrl, setMediaUrl] = useState("");
  const [entry, setEntry] = useState("");
  const [journal, setJournal] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const navigate=useNavigate()

   useEffect(() => {
          if (!email) {
            navigate("/login");
          }
        }, [email, navigate]); 

  const fileInputRef = useRef(null);

  const CLOUD_NAME = "db7lkzjci";
  const UPLOAD_PRESET = "OnlyPlans";
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/journals.json"
      );
      const data = res.data || {};
      const loaded = Object.entries(data)
        .map(([id, d]) => ({ id, ...d }))
        .filter((item) => item.email === email)
        .reverse();
      setJournal(loaded);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUploadFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await axios.post(CLOUDINARY_URL, form);
      setMediaUrl(res.data.secure_url);
      setError("");
    } catch (err) {
      setError("Media upload failed. Please try again.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!entry.trim()) {
      setError("Please add your thoughts.");
      return;
    }

    try {
      await axios.post(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/journals.json",
        {
          media: mediaUrl,
          entry,
          email,
          time: today,
        }
      );

      setMediaUrl("");
      setEntry("");
      setError("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      fetchData();
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6  mx-auto">
        {/* Toggle form button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400"
        >
          {showForm ? "Close Journal Form" : "Add New Journal Entry"}
        </button>

        {/* Interactive Form */}
        {showForm && (
          <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6 mb-8 shadow-lg">
            <label className="block mb-4 cursor-pointer">
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleUploadFile}
                className="hidden"
                ref={fileInputRef}
              />
              <div className="flex items-center justify-center border-2 border-dashed border-purple-400 rounded-lg p-4 text-purple-600 hover:bg-purple-100 hover:border-purple-600 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-6a4 4 0 00-4-4H7a4 4 0 00-4 4v6z"
                  />
                </svg>
                <span>{mediaUrl ? "Change Media" : "Upload Image or Video"}</span>
              </div>
            </label>

            {/* Media Preview */}
            {mediaUrl && (
              <div className="mb-4 ">
                {mediaUrl.match(/\.(jpe?g|png|gif|webp)$/i) ? (
                  <img
                    src={mediaUrl}
                    alt="Uploaded preview"
                    className="max-h-48 rounded-md shadow-md mx-auto "
                  />
                ) : mediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                  <video
                    src={mediaUrl}
                    controls
                    className="max-h-48 rounded-md shadow-md mx-auto"
                  />
                ) : null}
              </div>
            )}

            <textarea
              placeholder="Write your thoughts…"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              rows={5}
              className="w-full mb-4 p-4 rounded-lg border-2 border-transparent
                bg-white bg-opacity-90 text-purple-900 placeholder-purple-500
                focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-600
                transition duration-300 shadow-md resize-none"
            />

            {/* Animated Error */}
            {error && (
              <p
                className="text-red-500 mb-4 font-semibold animate-fadeIn"
                style={{ animationDuration: "0.4s" }}
              >
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-3 rounded font-semibold
                hover:bg-purple-700 hover:scale-105 transform transition duration-300
                focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              Add Entry
            </button>
          </div>
        )}

        {/* Journal Entries */}
        <div className="space-y-6">
          {journal.length === 0 ? (
            <p className="text-white text-center">No entries yet.</p>
          ) : (
            journal.map((item) => {
              const isImg = item.media?.match(/\.(jpe?g|png|gif|webp)$/i);
              const isVid = item.media?.match(/\.(mp4|webm|ogg)$/i);
              return (
                <div
                  key={item.id}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gray-800"
                >
                  {isImg && (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.media})` }}
                    />
                  )}
                  {isVid && (
                    <video
                      src={item.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 p-4 text-white h-full flex flex-col justify-between">
                    <p className="text-lg whitespace-pre-wrap  overflow-scroll">{item.entry}</p>
                    <p className="text-sm">Added on : {item.time}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation-name: fadeIn;
            animation-fill-mode: forwards;
          }
        `}</style>
      </div>
    </>
  );
}














