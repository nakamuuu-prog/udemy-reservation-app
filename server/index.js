const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./fake-db');
const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDB();
  fakeDb.initDb();
});
const app = express();

app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('I am running');
});
