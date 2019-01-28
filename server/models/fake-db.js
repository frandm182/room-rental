const Rental = require('./rental');

class FakeDb {
  constructor() {
    this.rentals = [{
      title: 'Nice view to ocean',
      city: 'San Francisco',
      street: 'Main street',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 4,
      description: 'Very nice aparment',
      dailyRate: 43
    },
    {
      title: 'Nice view on ocean',
      city: 'New York',
      street: 'Time square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very nice aparment in center of the city',
      dailyRate: 11
    },
    {
      title: 'Modern apartment in center',
      city: 'Los Angeles',
      street: 'Banika 18',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 4,
      description: 'Very nice aparment',
      dailyRate: 23
    }];
  }

/* jshint ignore:start*/
  async  cleanDb() {
    await Rental.deleteMany({});
  }
  /* jshint ignore:end*/

  pushRentalsToDb() {
    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);
      newRental.save();
      console.log('save', rental);
    });
  }

  seeDb() {
    // this.cleanDb();
    // console.log('cleaned');
    // this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
