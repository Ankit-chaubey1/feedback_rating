const Course = require('../models/Course');

//create a new course
const createCourse = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        const existingCourse = await Course.findOne({ title });
        if (existingCourse) {
            return res.status(400).json({ message: 'Course with this title already exists' });
        }
        const newCourse = new Course({ title, description });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

//get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

//get a course by id
const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

//update a course by id
const updateCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        if (title) course.title = title;
        if (description) course.description = description;
        await course.save();
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

//delete a course by id
const deleteCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById
};