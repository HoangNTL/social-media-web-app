const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const authRoute = require('./routes/auth.route');
const cros = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cros());

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', authRoute);

// Connect to database
sequelize.authenticate()
  .then(() => {
    console.log('Connect database successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


