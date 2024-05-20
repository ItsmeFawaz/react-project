import { useState } from "react";

interface ListGroupProps {
  courses: string[];
  heading: string;
}
function ListGroup({ courses, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {courses.length == 0 && <p>No List Item Found</p>}
      <ul className="list-group">
        {courses.map((course, index) => (
          <li
            key={course}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {course}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
