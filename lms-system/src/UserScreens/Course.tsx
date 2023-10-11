import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

function Course() {
  return (
    <div className="container course-container">
      <h1 className="text-center py-5">Course Catalog</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="course-card border border-dark shadow rounded p-2 d-flex flex-column align-items-center">
              <div className="course-image">
                <img src={course.image} alt={course.title} className="img-thumbnail" />
              </div>
              <h4>{course.title}</h4>
              <p className="fs-4 p-1">{course.description}</p>
              <h6>Duration <span>{course.duration}</span></h6>
              <p className="underline">Fees: {course.fees} / year</p>
              <Link className="btn btn-primary" to="/CourseForm">Get Registered</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const courses = [
  {
    title: 'Web Development',
    description: 'A web development course in an LMS system offers a flexible online learning environment, a structured curriculum covering key web development concepts, and hands-on projects.',
    duration: '1 year',
    fees: '15000',
    image: 'https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg',
  },
  {
    title: 'Graphic Designer',
    description: 'A web designer course in an LMS system equips students with the skills and knowledge needed for modern web design through an accessible online platform.',
    duration: '1 year',
    fees: '15000',
    image: 'https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais',
  },
  {
    title: 'Computer Science',
    description: 'A computer science course in an LMS system provides an accessible platform for learners to acquire essential skills in programming, algorithms, and software development.',
    duration: '2 years',
    fees: '15000',
    image: 'https://c8.alamy.com/comp/F08JHA/science-concept-computer-science-on-digital-background-F08JHA.jpg',
  },
  {
    title: 'Commerce',
    description: 'A commerce course in an LMS system offers an accessible online learning experience, covering subjects like accounting, economics, and business management.',
    duration: '2 years',
    fees: '15000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8iVwsdB9lLtX7tGD6VmFq_qzFSs0Tb8Wwal2-WC_&s',
  },
  {
    title: 'Pre Medical',
    description: 'A pre-medical course in an LMS system provides aspiring healthcare professionals with foundational knowledge in biology, chemistry, and other essential sciences, for pre-med students to build a strong academic foundation.',
    duration: '4 years',
    fees: '50K',
    image: 'https://pgc.edu/wp-content/uploads/2021/07/2.png',
  },
  {
    title: 'Pre Engineering',
    description: 'A pre-engineering course in an LMS system offers students a preparatory curriculum covering mathematics, physics, and other fundamental subjects, providing a convenient online platform for aspiring engineers to build a solid academic foundation.',
    duration: '3 years',
    fees: '100K',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26iRrgJN0mqymeha_-8U4yCvXhhBZ7UTyLw&usqp=CAU',
  },
];

export default Course;
