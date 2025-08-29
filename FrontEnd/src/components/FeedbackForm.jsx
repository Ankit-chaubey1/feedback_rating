import React, { useState } from "react";
import { createFeedback } from "../api/api";

function FeedbackForm({ courseId, onFeedbackAdded }) {
  const [studentName, setStudentName] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFeedback({ courseId, studentName, comments, rating });
    setStudentName("");
    setComments("");
    setRating(5);
    onFeedbackAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Submit Feedback</h4>
      <input
        type="text"
        placeholder="Your Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Your Feedback"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required
      />
      <br />
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1,2,3,4,5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;