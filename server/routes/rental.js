const router = require('express').Router();
const Rental = require('../models/rental');

router.get('', (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    res.json(foundRentals);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Rental.findById(id, (err, foundRental) => {
    err ?
    res.status(422).send({ errors: [{ title: 'Rental error', detail: 'Could not find a rental'}]}) :
    res.status(200).json(foundRental);
  });
});

module.exports = router;
