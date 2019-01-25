const Rental = require('./rental');

class FakeDb {
  constructor() {
    this.rentals = [{
      title: 'Nice view to ocean',
      city: 'San Francisco',
      street: 'Main street',
      category: 'condo',
      image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpg',
      bedrooms: 4,
      description: 'Very nice aparment',
      dailyRate: 43
    },
    {
      title: 'Nice view on ocean',
      city: 'New York',
      street: 'Time square',
      category: 'apartment',
      image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpg',
      bedrooms: 2,
      description: 'Very nice aparment in center of the city',
      dailyRate: 11
    },
    {
      title: 'Modern apartment in center',
      city: 'Los Angeles',
      street: 'Banika 18',
      category: 'house',
      image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpg',
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
