import React, { useEffect, useState } from "react";
import { getCourseById, getFeedbacksByCourse, getAggregateRating } from "../api/api";
import FeedbackForm from "../components/FeedbackForm";
import Analytics from "../components/Analytics";

function CourseDetail({ courseId, onBack }) {
  const [course, setCourse] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [aggregate, setAggregate] = useState(null);

  const fetchData = () => {
    getCourseById(courseId).then((res) => setCourse(res.data));
    getFeedbacksByCourse(courseId).then((res) => setFeedbacks(res.data));
    getAggregateRating(courseId).then((res) => setAggregate(res.data));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [courseId]);

  return (
    <div>
      <button onClick={onBack}>Back</button>
      {course && (
        <>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <Analytics aggregate={aggregate} />
          <h3>Feedbacks</h3>
          <ul>
            {feedbacks.map((fb) => (
              <li key={fb._id}>
                <strong>{fb.studentName}:</strong> {fb.comments} (Rating: {fb.rating})
              </li>
            ))}
          </ul>
          <FeedbackForm courseId={courseId} onFeedbackAdded={fetchData} />
        </>
      )}
    </div>
  );
}

export default CourseDetail;