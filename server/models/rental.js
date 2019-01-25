const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  title: { type: String, required: true, max: [128, 'Too long. Max is 128'] },
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, min: [4, 'Too short. Min is 4'] },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true, max: [128, 'Too long. Max is 128'] },
  bedrooms: Number,
  shared: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rental', rentalSchema);
