import React, { useEffect, useState } from "react";
import { getCourses } from "../api/api";

function CourseList({ onSelect }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setCourses([]);
      });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <button onClick={() => onSelect(course._id)}>
              {course.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;