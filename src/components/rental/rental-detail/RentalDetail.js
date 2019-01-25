import React from 'react';
import { connect } from "react-redux";
import * as actions from 'actions';

import { RemtalDetailInfo } from './RentalDetailInfo'

class RentalDetail extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(actions.fetchRentalsById(id));
  }

  render() {
    const { rental } = this.props;
    if (rental._id) {
      return (
        <section id='rentalDetails'>
          <div className='upper-section'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={rental.image} alt=''></img>
              </div>
              <div className='col-md-6'>
                <img src={rental.image} alt=''></img>
              </div>
            </div>
          </div>

          <div className='details-section'>
            <div className='row'>
              <div className='col-md-8'>
                <RemtalDetailInfo rental={rental} />
              </div>
              <div className='col-md-4'> BOOKING</div>
            </div>
          </div>
        </section>

      )
    } else {
      return (
        <h1>Loading....</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  }
}
export default connect(mapStateToProps, null)(RentalDetail)

