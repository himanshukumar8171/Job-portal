import { useState } from 'react'

//import './App.css'

import Navbar from './components/shared/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from "./components/Home"


// const appRouter = createBrowserRouter([
//   {
//     Path:'/',
//     element:<Home/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   },
//   {
//     path:"/signup",
//     element:<Signup/>
//   },
  
// ])

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   
 
  
  <BrowserRouter>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
  </>
  )
}

export default App
