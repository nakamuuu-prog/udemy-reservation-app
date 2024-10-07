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

// サーバーを起動
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  if (host === '::') {
    console.log(`Server is running at http://localhost:${port}`);
    return;
  }
  // 起動されたURIをコンソールに出力
  console.log(`Server is running at http://${host}:${port}`);
});
