const app = require('express')();
const mongoose = require('mongoose');
const config = require('./config/index');
const FakeDb = require('./models/fake-db');
const rentalRoutes = require('./routes/rental');

const port = process.env.PORT || 3000;

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true })
.then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seeDb();
});

app.use('/api/v1/rentals', rentalRoutes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
