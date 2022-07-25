import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Routes>
        <Route exact path="" element={ <Home /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/technologies" element={ <Technologies /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
