const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// CORS middleware
app.use(cors({
  origin: 'http://localhost:5173' // frontend ka URL
}));

app.use(express.json());

// Routes
const courseRoutes = require('./routes/CourseRoute');
app.use('/api/courses', courseRoutes);

const feedbackRoutes = require('./routes/FeedbackRoute');
app.use('/api/feedbacks', feedbackRoutes);

// DB Connection
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
