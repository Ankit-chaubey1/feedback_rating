const Feedback = require('../models/Feedback');
const Course = require('../models/Course');
//create a new feedback
const createFeedback = async (req, res) => {
    try {
        const { courseId, studentName, comments, rating } = req.body;
        if (!courseId || !studentName || !comments || !rating) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const newFeedback = new Feedback({ courseId, studentName, comments, rating });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
//get all feedbacks for a course
const getFeedbacksByCourseId = async (req, res) => {
    try {
        const { courseId } = req.params;
        const feedbacks = await Feedback.find({ courseId });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}


const getagreegateRatingByCourseId = async (req, res) => {
    try {
        const { courseId } = req.params;
        const feedbacks = await Feedback.find({ courseId });
        if (feedbacks.length === 0) {
            return res.status(404).json({ message: 'No feedbacks found for this course' });
        }
        const totalRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
        const averageRating = totalRating / feedbacks.length;
        res.status(200).json({ averageRating, totalFeedbacks: feedbacks.length });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {createFeedback, getFeedbacksByCourseId, getagreegateRatingByCourseId};