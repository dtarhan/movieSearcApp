import actionTypes from '../actions/actionTypes';

const initialState = {
  pending: false,
  success: false,
  movies: [],
  filtredMovies: [],
  fail: false,
  error: '',
};
// filtredı sil movieye geç
const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.filmActions.GET_FILMS_START:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.filmActions.GET_FILMS_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        fail: false,
        movies: action.payload,
        
      };
    case actionTypes.filmActions.GET_FILMS_FAIL:
      return {
        ...state,
        pending: false,
        success: false,
        fail: true,
        error: action.payload,
      };
    case actionTypes.filmActions.GET_FILTRED_FILMS_SUCCESS:
      return {
        ...state,
        filtredMovies: action.payload,
      };
    case actionTypes.filmActions.CLEAR_FILMS:
      return {
        ...state,
        filtredMovies: [],
      };

    default:
      return state;
  }
};

export default filmsReducer;
