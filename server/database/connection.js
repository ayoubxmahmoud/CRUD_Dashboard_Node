// Importing the mongoose library for MongoDB
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Connecting to MongoDB using the connection string from the environment variables
        const con = await mongoose.connect(process.env.MONGO_URI);

        // Logging a successful connection message along with the host information
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        // Logging any errors that occur during the connection process
        console.error(err);
        // Exiting the process with an error code if the connection fails
        process.exit(1);
    }
}

// Exporting the connectDB function to be used in other parts of the application
module.exports = connectDB;




