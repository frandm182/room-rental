import { FETCH_RENTALS_INIT, FETCH_RENTALS_SUCCESS, FETCH_RENTALS_BY_INIT, FETCH_RENTALS_BY_SUCCESS } from './types';
import axios from 'axios';

const fetchRentalsByIdSuccess = rental => ({
  type: FETCH_RENTALS_BY_SUCCESS,
  rental
});

const fetchRentalByIdInit = () => ({
  type: FETCH_RENTALS_BY_INIT
});

const fetchRentalsInit = () => ({
  type: FETCH_RENTALS_INIT
});

const fetchRentalsSuccess = rentals => ({
  type: FETCH_RENTALS_SUCCESS,
  rentals
});

export const fetchRentals = () =>
  dispatch => {
    dispatch(fetchRentalsInit());
    axios.get(`http://localhost:3000/api/v1/rentals`)
      .then(rentals => dispatch(fetchRentalsSuccess(rentals)));
  };

export const fetchRentalsById = id =>
  dispatch => {
    dispatch(fetchRentalByIdInit());
    axios.get(`http://localhost:3000/api/v1/rentals/${id}`)
      .then(rental => dispatch(fetchRentalsByIdSuccess(rental)));
  };

