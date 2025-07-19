// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios"

// export default function Todo(){
//     const [task,setTask]=useState("")
//     const [todo,setTodo]=useState([])
//     const [error,setError]=useState("")
//     const [form,setForm]=useState(false)
//     const email=sessionStorage.getItem("email")
//     const [editingId, setEditingId] = useState(null);
//     const [editText, setEditText] = useState("");
    

//     async function handleSubmit(e){
//         e.preventDefault()

//         if(task.trim()===""){
//             setError("Enter Task!")
//             return
//         }

//         try {
//             const response=await axios.post("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",{
//                 task:task,email:email
//             })
//             setTask("")
//             fetchData()
//         } catch (error) {
//             setError(error.message)
//         }

//     }

//     async function fetchData(){
//         try {
//             const response=await axios.get("https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json")
//             const result= response.data

//             if (!result) {
//                 setTodo([]);
//                 return;
//               }
        
//               const loaded = Object.entries(result)
//                 .map(([id, data]) => ({
//                   id,
//                   ...data,
//                 }))
//                 .filter((item) => item.email === email)
        
//               setTodo(loaded)
//             console.log(loaded)
//         } catch (error) {
//             setError(error.message)
//         }
//     }


//     async function handleDelete(id) {
//         try {
//           await axios.delete(
//             `https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`
//           );
//           fetchData();
//         } catch (error) {
//           setError(error.message);
//         }
//       }


//       async function handleUpdate(id) {
//         if (!editText.trim()) {
//           setError("Updated task can't be empty.");
//           return;
//         }
    
//         try {
//           await axios.patch(
//             `https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`,
//             {
//               task: editText,
//             }
//           );
//           setEditingId(null);
//           setEditText("");
//           fetchData();
//         } catch (error) {
//           setError(error.message);
//         }
//       }



//     useEffect(()=>{
//         fetchData()
//     },[])

//     return(
//         <>
//         <Navbar/>
//         {form &&
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Enter Task.." value={task} onChange={(e)=>setTask(e.target.value)}/>
//             <button type="submit">+ Add</button>
//             {error && <div>{error}</div>}
//         </form>
// }
//         <button onClick={()=>setForm(!form)}>{form?"Hide":"Add Task"}</button>

//         <div>
//             {todo.length===0 && <p>Add Tasks!</p>}
            
//         {todo.map((ele) => (
//           <div key={ele.id} className="mb-2">
//             {editingId === ele.id ? (
//               <>
//                 <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
//                 <button onClick={() => handleUpdate(ele.id)}>Save</button>
//                 <button onClick={() => setEditingId(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <p>{ele.task}</p>
//                 <button onClick={() => {setEditingId(ele.id); setEditText(ele.task);}}>Edit</button>
//                 <button onClick={() => handleDelete(ele.id)}>Delete</button>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </>

//     )
// }



























import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const navigate=useNavigate()

  const email = sessionStorage.getItem("email");

   useEffect(() => {
          if (!email) {
            navigate("/login");
          }
        }, [email, navigate]); 

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
      );
      const result = response.data;

      if (!result) {
        setTodo([]);
        return;
      }

      const loaded = Object.entries(result)
        .map(([id, data]) => ({
          id,
          ...data,
        }))
        .filter((item) => item.email === email);

      setTodo(loaded);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
      setError("Task can't be empty.");
      return;
    }

    try {
      await axios.post(
        "https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        { task, email }
      );
      setTask("");
      setFormVisible(false);
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`
      );
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleUpdate(id) {
    if (!editText.trim()) {
      setError("Updated task can't be empty.");
      return;
    }

    try {
      await axios.patch(
        `https://onlyplans-7f66d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`,
        { task: editText }
      );
      setEditingId(null);
      setEditText("");
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }

  function handleDragEnd(result) {
    if (!result.destination) return;
    const newItems = Array.from(todo);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setTodo(newItems);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-md shadow-2xl rounded-xl p-6">
          <h2 className="text-white text-3xl font-bold text-center mb-6">My Todo List 📝</h2>

          {todo.length === 0 ? (
            <p className="text-white text-center text-lg">No tasks yet. Start adding!</p>
          ) : (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="todoList">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4"
                  >
                    {todo.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white/80 p-4 rounded-lg shadow-md flex justify-between items-center"
                          >
                            {editingId === item.id ? (
                              <div className="flex gap-2 w-full">
                                <input
                                  type="text"
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  className="flex-grow px-3 py-2 rounded border focus:outline-none"
                                />
                                <button
                                  onClick={() => handleUpdate(item.id)}
                                  className="bg-green-500 text-white px-3 rounded hover:bg-green-600"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingId(null)}
                                  className="bg-gray-400 text-white px-3 rounded hover:bg-gray-500"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <>
                                <p className="text-gray-800 flex-grow">{item.task}</p>
                                <div className="space-x-2">
                                  <button
                                    onClick={() => {
                                      setEditingId(item.id);
                                      setEditText(item.task);
                                    }}
                                    className="text-yellow-600 hover:text-yellow-800 text-xl cursor-pointer"
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-600 hover:text-red-800 text-xl cursor-pointer"
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>

        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setFormVisible(true)}
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300 animate-bounce cursor-pointer"
          >
            + Add Task
          </button>
        </div>

        {formVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
              <button
                onClick={() => {
                  setFormVisible(false);
                  setError("");
                }}
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-4 text-center">Add a new task</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your task..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 cursor-pointer">Add Task</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
