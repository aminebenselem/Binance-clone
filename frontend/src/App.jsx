import { useState } from 'react'
import { SignUp } from './components/signup'
import './App.css'
import { Login } from './components/login'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
