import React, { useEffect } from 'react';


import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ListFilms = () => {
  const navigate = useNavigate();
  //localStorage.setItem('user', 'mail:' + email + ' ' + 'pas:' + password);
    
  
  useEffect(() => {
    if (!localStorage.getItem('emailKey') && !localStorage.getItem('passwordKey') ) {
      navigate('/login');
    }
  }, []);


  const { filmsState } = useSelector((state) => state);





  return (
    <div className="container my-5 ">
      <table className="table table-striped mx-2">
        <thead>
          <tr>
            <th scope="col"> No</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Vote Average</th>
            <th scope="col">Year</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {filmsState?.filtredMovies?.map((film, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{film.original_title}</td>
                <td>{film.vote_average}</td>
                <td>{film.release_date} </td>
                <td>
                  
                  <Link
                    to={`/film-detail/${film.id}`}
                    className="btn btn-sm btn-success"
                  >
                    
                    Detail
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListFilms;
