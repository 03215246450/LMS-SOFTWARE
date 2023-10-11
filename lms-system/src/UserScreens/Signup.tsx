import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../Components/Buttons";
import Input from "../Components/Input";
import { fbSignUp } from "../Router/Fbmethods";


export default function Signup() {
  const [model, setModel] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const fillModel = (key:any, val:any) => {
    setModel({ ...model, [key]: val });
  };

  const signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="login-container">
      <div className="container">
      </div>
      <div className="container m-auto py-2">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 m-auto border rounded p-4 shadow">
              <h1 className="login-heading text-center">Sign Up</h1>

              <div>
                <Input
                  onChange={(e:any) => fillModel("name", e.target.value)}
                  label="Name"
                  type="text"
                />
              </div>

              <div>
                <Input
                  onChange={(e :any) => fillModel("email", e.target.value)}
                  label="Email"
                  type="email"
                />
              </div>

              <div>
                <Input
                  onChange={(e :any) => fillModel("password", e.target.value)}
                  label="Password"
                  type="password"
                />
              </div>

              <Buttons onClick={signUpUser} label="Sign Up" />

              <p className="p-3" onClick={goToLogin}>
                If you already have an account, go to the <u><b className="text-white fs-5 p-2">Login</b></u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
