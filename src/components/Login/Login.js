import React, { useState } from "react";
import useSignUpForm from "../../Hooks/FormData";
import { Modal, Button, Form} from "react-bootstrap";
function Login() {
  const {
    state,
    handleInputChange,
    handleSubmit,
    handleClose,
    handleShow,
    show,
  } = useSignUpForm();
  return (
    <>
      <a href="" onClick={handleShow}>
        Already Registered Login
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name:</Form.Label>
              <Form.Control
                name="username"
                value={state.username}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                name="password"
                value={state.password}
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
