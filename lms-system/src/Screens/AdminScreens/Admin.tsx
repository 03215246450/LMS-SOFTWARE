import React, { useState } from 'react';
import { fbAdd, fbSignUp } from '../../Router/Fbmethods';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    instituteName: '',
    shortName: '',
    logoImage: '',
    numCampus: '',
    campusDetails: '',
    location: '',
    address: '',
    contact: '',
    ownerContact: '',
    ownerEmail: '',
    userType: '',
    instituteType: '',
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log(formData);
    fbSignUp(formData) 
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
              <h5 className="card-title">Institute Form</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="instituteName" className="form-label">Institute Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="instituteName"
                    name="instituteName"
                    value={formData.instituteName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="shortName" className="form-label">Institute Short Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="shortName"
                    name="shortName"
                    value={formData.shortName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="numCampus" className="form-label">No Of Campus</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numCampus"
                    name="numCampus"
                    value={formData.numCampus}
                    onChange={handleChange}
                  />
                </div>
                <h5 className='my-3'>Campus Details</h5>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ownerContact" className="form-label">Owner Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ownerContact"
                    name="ownerContact"
                    value={formData.ownerContact}
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
                    onChange={handleChange} required
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
                    onChange={handleChange} required
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
