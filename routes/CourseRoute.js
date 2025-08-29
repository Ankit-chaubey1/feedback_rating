const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById
} = require("../controllers/CourseController");

router.post("/", createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", updateCourseById);
router.delete("/:id", deleteCourseById);

module.exports = router;
