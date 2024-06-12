import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from "./Components/Dashboard"
import Landing from "./Components/Landing"

function App() {
  return (
    <>
     <BrowserRouter>
      <Appbar/> 
      {/* this is also how the app bar is imported inside the browser router since we can't define the useNavigate outside the Browserrouter */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

function Appbar() {
  const Navigate = useNavigate();
return (
  <div>
    <button onClick={()=> {
      Navigate("/")
    }}>Landing Page</button>

    <button onClick={()=> {
      Navigate("/dashboard")
    }}>Dashboard</button>
  </div>

)
}

export default App
