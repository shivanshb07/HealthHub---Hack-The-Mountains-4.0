
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

// Replace '<YourMongoDBConnection>' with the actual connection string from MongoDB Atlas.
mongoose.connect('mongodb+srv://anishdoomra:<password>@cluster0.dkbzji2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define API routes
app.use('/api/doctors', require('./routes/doctors'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






















