import './App.css'
import {Routes,Route} from "react-router-dom"
import Intro from './components/Intro.Jsx'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Todo from './components/Todo'
import Journal from './components/Journal'
import Mental from './components/Mental'
import Habit from './components/Habit'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/habit' element={<Habit/>}/>
        <Route path='/mentalHealthTracker' element={<Mental/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
