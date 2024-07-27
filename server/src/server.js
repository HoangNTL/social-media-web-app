const express = require('express');
const sequelize = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Connect to database
sequelize.authenticate()
  .then(() => {
    console.log('Connect database successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
