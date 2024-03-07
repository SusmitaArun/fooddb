// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/foodDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/food', foodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
