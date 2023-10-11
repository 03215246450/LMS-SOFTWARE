import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CourseData {
  courseName: string;
  duration: string;
  fee: string;
  teacher: string;
}

interface CourseFormProps {
  registeredCourses: CourseData[];
  setRegisteredCourses: React.Dispatch<React.SetStateAction<CourseData[]>>;
}

function CourseForm({ registeredCourses, setRegisteredCourses }: CourseFormProps) {
  const [formData, setFormData] = useState<CourseData>({
    courseName: '',
    duration: '',
    fee: '',
    teacher: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registeredCourse: CourseData = { ...formData };
    setRegisteredCourses([...registeredCourses, registeredCourse]);
    setFormData({
      courseName: '',
      duration: '',
      fee: '',
      teacher: '',
    });
    alert('Your form has been submitted');


    navigate('/RegisteredCourses');
  };

  let nav = () => {
    navigate("/RegisteredCourses")
  }

  return (
    <div className="container my-5">
       <h1 className='text-center p-5 my-5'>Courses Registration form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fee" className="form-label">
            Fee
          </label>
          <input
            type="number"
            className="form-control"
            id="fee"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="teacher" className="form-label">
            Teacher
          </label>
          <input
            type="text"
            className="form-control"
            id="teacher"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h4 onClick={nav} className='border border-dark shadow rounded p-3 my-5 w-50 '>Check your Registered Courses</h4>
    </div>
  );
}

export default CourseForm;
