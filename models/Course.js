const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    description:{
        type: String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 2000,
    }
});
module.exports = mongoose.model('Course', CourseSchema);