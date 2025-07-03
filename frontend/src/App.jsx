import { useState } from 'react'
import { SignUp } from './components/signup'
import './App.css'
import { Login } from './components/login'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
