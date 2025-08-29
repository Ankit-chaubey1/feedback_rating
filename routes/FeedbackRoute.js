const express = require("express");
const router = express.Router();

const {
  createFeedback,
  getFeedbacksByCourseId,
  getagreegateRatingByCourseId
} = require("../controllers/FeedbackController");

router.post("/", createFeedback);
router.get("/:courseId", getFeedbacksByCourseId);
router.get("/aggregate/:courseId", getagreegateRatingByCourseId);

module.exports = router;
