import React from 'react'
import {NavLink, Route, Routes} from 'react-router'
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import FetchApi from './pages/FetchApi';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<FetchApi />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App