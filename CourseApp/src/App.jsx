import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Course from "./components/Course";

import "./css/Course.css";
function App() {
  return (
    <div className="main">
      <Header />
      <div className="main_div">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
