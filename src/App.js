import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FilmDetail from './pages/FilmDetail';
import ConfirmForm from './pages/ConfirmForm';





function App() {
  
 
    
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<ConfirmForm />} />        
        <Route path="/film-detail/:filmId" element={<FilmDetail />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




