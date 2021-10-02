import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import AuthService  from '../services/auth.service'

function Login({ onLogin }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await AuthService.login(
      email,
      password
    );
    console.log('[LOGIN] ', data.token)
    if(data.token){
      onLogin()
    }
  }

  return (
    <Row>
      <Col md="4" className="offset-md-4">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5" className="text-center">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Email</label>
                    <Input placeholder="email" type="email" onChange={e => setEmail(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <label>Password</label>
                    <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)}/>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <div className="ml-auto mr-auto d-flex justify-content-center">
                  <Button
                    className="btn-round"
                    color="primary"
                    type="submit"
                  >
                    Sign In
                  </Button>
                  <Button
                    className="btn-round"
                    // color="primary"
                    href='/register'
                  >
                    Sign Up
                  </Button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
