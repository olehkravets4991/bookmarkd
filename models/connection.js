require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

// Establish a connection
mongoose.connect(DATABASE_URL);

// logs for connections
mongoose.connection
    .on('open', () => console.log('Connected to mongoose'))
    .on('close', () => console.log('Disconnected from mongoose'))
    .on('error', (error) => console.log(error));

module.exports = mongoose;