import * as redux from "redux"
import { rentalReducer, selectedRentalReducer } from "./rental-reducer";
import thunk from "redux-thunk";
export const init = () => {
  const reducer = redux.combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
  const store = redux.createStore(reducer,composeEnhancers(redux.applyMiddleware(thunk)));

  return store;
}
