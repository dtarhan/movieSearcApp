import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import api from '../api/api';

import { useParams, Link, useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';




const FilmDetail = () => {
  const params = useParams();
  
  console.log(params)
  //const { filmsState } `= useSelector((state) => state);
  //const myFilm = filmsState.find((item) => item.id == params.filmId);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
    api
      .get(
        `https://api.themoviedb.org/3/movie/${params.filmId}?api_key=bac4cd075d4563a3af79aea429daefcc`
      )

      .then((res) =>  setSelectedFilm(res.data));
              
      

  }, [params.filmId]);

  
console.log(selectedFilm)
  if (selectedFilm === null) return null;

  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1 className="text-info">Details </h1> <hr />
        <h3> <b> Name of Movie:</b> <p className="text-primary"> {selectedFilm.original_title} </p> </h3> <hr />

        <img src={`https://image.tmdb.org/t/p/w500/${selectedFilm.backdrop_path}`}/>  <hr />
        
        <h3> <b> Language:</b> <span> {selectedFilm.original_language} </span> </h3> <hr />

        <h3> <b> Vote Average: </b> {selectedFilm.vote_average} </h3> <hr />



        <h3>  <b> Summary: </b> <p className="text-secondary"> {selectedFilm.overview} </p> </h3> <hr />


        <h3> <b> Category: </b> <p className="text-secondary">

          {selectedFilm.genres.map((genre,index) => (
            <span key={index}> {genre.name} </span>
          ))}
        </p>
        </h3>
        <hr />
        <h3>
          <Link to={`${selectedFilm.homepage}`}> MovieLink </Link>{' '}
        </h3>
        <hr />
        <Link to={'/'}>
          <button className="btn btn-danger"> Back to HomePage</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default FilmDetail;

/*useEffect(() => {
  
  api
    .get(`${urls.movie}/${params.filmId}`)
    .then((resFilm) => {
     // console.log(resFilm.data);
      setMyFilm(resFilm.data);
      
    })
    .catch((err) => {});
}, []);
*/

/*
useEffect(() => {
    api
      .get(
        'https://api.themoviedb.org/3/movie/${}?api_key=bac4cd075d4563a3af79aea429daefcc&language=en-US'
      )
      .then((res) => setMyFilm(res.data));
  }, []);
*/
