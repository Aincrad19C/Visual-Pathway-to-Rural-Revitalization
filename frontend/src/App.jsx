import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Map from './pages/Map.jsx';
import ArticalPage from './pages/ArticalPage.jsx';
import AiButton from './components/AiButton.jsx';

import './App.css';

const songPath = '/path/to/your/song.mp3';
function App() {
  return (
    <Router>
      <div>
        <AiButton position={{ top: '450px', left: '150px',zIndex: 2 }}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="artical" element={<ArticalPage />}/>
          {/* 其他路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;