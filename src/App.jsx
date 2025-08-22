import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import KeyboardTester from "./components/keyboard-testing.jsx"
import SpeedTest from './components/SpeedTest.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KeyboardTester />} />
        <Route path="/speed-test" element={<SpeedTest />} />
      </Routes>
    </Router>
  )
}

export default App
