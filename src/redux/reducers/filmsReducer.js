import actionTypes from '../actions/actionTypes';

const initialState = {
  
  movies: [],
  
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.filmActions.GET_FILMS_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case actionTypes.filmActions.CLEAR_FILMS:
      return {
        ...state,
        movies: [],
      };

    default:
      return state;
  }
};

export default filmsReducer;
