// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for your API
app.use(bodyParser.json());

// Connect to MongoDB (update the connection string)
mongoose.connect('mongodb://localhost/healthhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define API routes
app.get('/', (req, res) => {
  res.send('HealthHub Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







// server.js
// ... (previous code)

// Define API routes
app.use('/api/doctors', require('./routes/doctors'));

// ... (other routes can be added in a similar manner)



app.use('/api/appointments', require('./routes/appointments'));













