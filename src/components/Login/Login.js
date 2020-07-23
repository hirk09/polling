import React from "react";
import { Modal, Button, Form, Spinner, Dropdown } from "react-bootstrap";

export default class Login extends React.PureComponent {
  state = {
    userData: {
      username: "",
      password: "",
    },
    showLogIn: false,
    disabled: true,
  };
  submitForm = (e) => {
    e.preventDefault();
    console.log("");
  };
  handleShow = (e) => {
    e.preventDefault();
    this.setState({ disabled: true, showLogIn: true });
  };
  handleHide = () => {
    this.setState({ disabled: true, showLogIn: false });
  };
  handleOnChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const userData = { ...this.state.userData, [name]: value };
    this.setState({ ...this.state.userData, userData });
  };
  render() {
    return (
      <div>
        <a href="" variant="primary" onClick={this.handleShow}>
          Already Registered Login
        </a>
        <Modal show={this.state.showLogIn} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name:</Form.Label>
                <Form.Control
                  name="username"
                  value={this.state.userData.username}
                  onChange={this.handleOnChange}
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  name="password"
                  value={this.state.userData.password}
                  onChange={this.handleOnChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <br />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleHide}>
              Close
            </Button>
            <Button onClick={this.submitForm}>Login</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
