/* jshint ignore:start*/
import { FETCH_RENTALS_INIT, FETCH_RENTALS_SUCCESS, FETCH_RENTALS_BY_SUCCESS, FETCH_RENTALS_BY_INIT } from "../actions/types";

const INITIAL_STATE = {
  rentals: {
    data: []
  },
  rental: {
    data: {}
  }
}

export const rentalReducer = (state = INITIAL_STATE.rentals, action) => {

  console.log(action, state);

  switch (action.type) {

    case FETCH_RENTALS_INIT:
      return { ...state, data: [] };

    case FETCH_RENTALS_SUCCESS:
      return { ...state, data: action.rentals };

    default:
      return state;
  }
}

export const selectedRentalReducer = (state = INITIAL_STATE.rental, action) => {



  switch (action.type) {

    case FETCH_RENTALS_BY_INIT:
      return { ...state, data: {} };

    case FETCH_RENTALS_BY_SUCCESS:
      console.log(action, { ...state, data: action.rental });
      return { ...state, data: action.rental };

    default:
      return state;

  }
}
/* jshint ignore:end*/
