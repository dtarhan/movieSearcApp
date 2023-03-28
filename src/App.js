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



/*
useEffect(() => {
  // fetch films 
  dispatch({ type: actionTypes.filmActions.GET_FILMS_START });
  api
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=bac4cd075d4563a3af79aea429daefcc&language=en-US&page=1'
    )
    .then((res) => {
      dispatch({
        type: actionTypes.filmActions.GET_FILMS_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.filmActions.GET_FILMS_FAIL,
        payload: 'Serverda bir hata oluştu',
      });
    });
}, []);

if (filmsState.success === false) return null;*/
