import React, { useState } from 'react';
import { fbAdd, fbSignUp , fbLogin } from '../../Router/Fbmethods';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    instituteName: '',
    Name: '',
    userType: '',
    CNIC : '',
    CourseName:""
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log(formData);
    fbLogin(formData) 
      .then((res) => {
        console.log(res);
        
        navigate("/registration");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">REgisteration Form</h5>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="Name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                  />
                </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="CNIC" className="form-label">CNIC</label>
                  <input
                    type="text"
                    className="form-control"
                    id="CNIC"
                    name="CNIC"
                    value={formData.CNIC}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="CouseName" className="form-label">Course name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="CourseNmae"
                    name="CourseName"
                    value={formData.CourseName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label">User Type</label>
                  <select
                    className="form-select"
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                  >
                    <option value="Institute">Institute</option>
                    <option value="School">School</option>
                    <option value="College">College</option>
                    <option value="University">University</option>
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
