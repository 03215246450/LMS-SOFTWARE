import React, { useState } from "react";
import { fbLogin } from "../Router/Fbmethods";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Login() {
  const [model, setModel] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const fillModel = (key : any, val : any) => {
    setModel({ ...model, [key]: val });
  };

  const login = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        navigate("Sidenav");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <Container>
        <h1 className="pt-5 text-dark text-center">Login to Your Account</h1>
        <hr className="w-25 my-5 mx-auto" />

        <Row>
          <Col md={6} className="mx-auto">
            <h1 className="login-heading text-center">Login</h1>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={model.email}
                  onChange={(e) => fillModel("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={model.password}
                  onChange={(e) => fillModel("password", e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                className="w-100 my-2"
                onClick={login}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
