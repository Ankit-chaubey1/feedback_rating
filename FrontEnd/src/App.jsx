import React, { useState } from "react";
import Header from "./components/Header";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <Header />
      {!selectedCourse ? (
        <CourseList onSelect={setSelectedCourse} />
      ) : (
        <CourseDetail courseId={selectedCourse} onBack={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}

export default App;