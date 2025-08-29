import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ use .env variable
});

// --------------------- Course APIs ---------------------
export const getCourses = () => API.get("/courses");
export const getCourseById = (id) => API.get(`/courses/${id}`);
export const createCourse = (courseData) => API.post("/courses", courseData);
export const updateCourse = (id, courseData) => API.put(`/courses/${id}`, courseData);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);

// --------------------- Feedback APIs ---------------------
export const createFeedback = (feedbackData) => API.post("/feedbacks", feedbackData);
export const getFeedbacksByCourse = (courseId) => API.get(`/feedbacks/${courseId}`);
export const getAggregateRating = (courseId) => API.get(`/feedbacks/aggregate/${courseId}`);
