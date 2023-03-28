import { createStore,combineReducers } from "redux";

import filmsReducer from "./reducers/filmsReducer";


const rootReducer=combineReducers({
    filmsState:filmsReducer,
    
})

const store=createStore(rootReducer)

export default store