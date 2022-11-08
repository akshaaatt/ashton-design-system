import * as React from 'react'
import './res/css/styles.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
