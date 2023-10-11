import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboardm() {
  const navigate = useNavigate();

  const learn = () => {
    navigate("/Sidenav");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <h1 className="text-center"><b>Welcome to the LMS System </b></h1>
      <p className=" fs-5 p-2 text-center w-50">
        A Learning Management System (LMS) is a digital platform that simplifies the creation, management, and delivery of educational and training content. It centralizes learning resources, offers user tracking, and provides data-driven insights, making it an essential tool in modern education and corporate training.</p>
      <button className="bg-dark p-2 rounded shadow border border-dark text-white " onClick={learn}>Learn More</button>
    </div>
  );
}

export default Dashboardm;
