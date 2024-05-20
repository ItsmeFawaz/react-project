import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let courses = [
    "Introduction to Probability",
    "Introduction to Computer & SPSS",
    "Sampling Techniques I",
    "Linear Algebra",
    "Calculus",
    "Academic Writing",
  ];
  return (
    <div>
      <ListGroup courses={courses} heading="Statistics Courses for 1/2" />
    </div>
  );
}

export default App;
