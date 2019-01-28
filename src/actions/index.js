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
    axios.get(`/api/v1/rentals`)
      .then(res => res.data)
      .then(rentals => dispatch(fetchRentalsSuccess(rentals)));
  };

export const fetchRentalsById = id =>
  dispatch => {
    dispatch(fetchRentalByIdInit());
    /*dispatch(fetchRentalsByIdSuccess({
      _id: 1,
      title: 'Nice view to ocean',
      city: 'San Francisco',
      street: 'Main street',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 4,
      description: 'Very nice aparment',
      dailyRate: 43
    })); */
     axios.get(`/api/v1/rentals/${id}`)
      .then(res => res.data)
      .then(rental => dispatch(fetchRentalsByIdSuccess(rental)));

  };

