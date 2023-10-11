import React from 'react';

interface CourseData {
  courseName: string;
  duration: string;
  fee: string;
  teacher: string;
}

interface RegisteredCoursesProps {
  registeredCourses: CourseData[];
}

function RegisteredCourses({ registeredCourses }: RegisteredCoursesProps) {
  return (
    <div className="container">
      <h1 className="text-center py-5">Registered Courses</h1>
      <ul>
        {registeredCourses.map((course, index) => (
          <ul className="list-group my-3">
            <li className="list-group-item" > <p>Course Name: {course.courseName}</p> </li>
            <li className="list-group-item" > <p>Duration: {course.duration}</p> </li>
            <li className="list-group-item" > <p>Fee: {course.fee}</p> </li>
            <li className="list-group-item" > <p>Teacher: {course.teacher}</p> </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default RegisteredCourses;



{/* <li key={index}>
Course Name: {course.courseName}<br />
Duration: {course.duration}<br />
Fee: {course.fee}<br />
Teacher: {course.teacher}<br />
</li> */}