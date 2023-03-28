import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import actionTypes from "../redux/actions/actionTypes";

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filterMovies = () => {

    api
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=bac4cd075d4563a3af79aea429daefcc&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
      .then((res) => {
        dispatch({
          type: actionTypes.filmActions.GET_FILTRED_FILMS_SUCCESS,
          payload: res.data.results,
        });

      });
  };

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.clear();
    dispatch({ type: actionTypes.filmActions.CLEAR_FILMS, payload: true })
    navigate('/login');

  }

  return (
    <header >
      <nav className="navbar navbar-expand-sm navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Search Application
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100" >
          <input
            className="form-control w-100"
            type="text"
            placeholder="Enter the name of the movie you want to search..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <div className="d-flex ms-3 ">
            <button  className="btn btn-lg btn-secondary ms-3" onClick={() => filterMovies()}>Search</button>
            <button className="btn btn-lg btn-danger ms-3 me-3" onClick={logOut}>Log Out</button>
          </div>

        </div>
      </nav>
      {/* filtre */}

    </header>
  );
};
export default Header;



