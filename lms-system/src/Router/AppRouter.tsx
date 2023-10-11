import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidenav from "../UserScreens/SideNav";
import Login from "../UserScreens/Login";
import Signup from "../UserScreens/Signup";
import Protected from "../UserScreens/Protected";
import Registration from "../Screens/AdminScreens/Registration";
import Admin from "../Screens/AdminScreens/Admin";
import Course from "../UserScreens/Course";
import StudentList from "../UserScreens/StudentList";
import StudentMang from "../Screens/AdminScreens/StudentMang";
import Result from "../Result";
import CourseForm from "../UserScreens/CourseForm";
import RegisteredCourses from "../UserScreens/RigesteredCourse";
import React, { useState } from 'react';
import QuizApp from "../Screens/AdminScreens/QuizApp";
import Dashboardm from "../UserScreens/Dashboardm";



interface CourseData {
  courseName: string;
  duration: string;
  fee: string;
  teacher: string;
}

function AppRouter() {

  const [registeredCourses, setRegisteredCourses] = useState<CourseData[]>([]);


  return (
    <Router>
      <Routes>
      <Route path="/Admin" element={<Protected UserScreens={Admin}  />} />
      <Route path="/Course" element={<Course />} />
      <Route path="/StudentMang" element={<Protected UserScreens={StudentMang}  />} />
      <Route path="/Result" element={<Protected UserScreens={StudentList}  />} />
      <Route path="/Quizapp" element={<Protected UserScreens={QuizApp}  />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/CourseForm" element={<CourseForm registeredCourses={registeredCourses} setRegisteredCourses={setRegisteredCourses} />} /> 
        <Route path="/RegisteredCourses" element={<RegisteredCourses registeredCourses={registeredCourses} />} />
        <Route path="/StudentMang" element={<StudentMang />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Sidenav" element={<Sidenav />} />
        <Route path="/" element={<Dashboardm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
