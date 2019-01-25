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
    console.log(id)
    res.json(foundRental);
  });
});

module.exports = router;
