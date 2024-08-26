const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Dorotas_Hair_Salon')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB...", err));


// Import routes
const feedbackRoutes = require('./routes/feedback');
app.use('/api', feedbackRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

