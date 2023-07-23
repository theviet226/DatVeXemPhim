import { createStore, combineReducers } from "redux";
import { DatVeReducer } from "./ve-xem-phim/dat-ve-xem-phim.reduce";

const rootReducer = combineReducers({
  DatVeReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());