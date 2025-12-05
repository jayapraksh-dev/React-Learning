import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Welcome from './props-ex/welcome'
import UseStateComp from './useState-ex/UseStateComp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/props" element={<Welcome />} />
        <Route path="/states" element={<UseStateComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
