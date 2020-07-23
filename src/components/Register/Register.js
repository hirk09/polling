import React from "react";
import { Modal, Button, Form, Spinner, Dropdown } from "react-bootstrap";

export default class Register extends React.PureComponent {
  state = {
    userData: { username: "", password: "", userRole: "" },
  };
  submitForm = (e) => {
    e.preventDefault();
    console.log("");
  };
  handleOnChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const userData = { ...this.state.userData, [name]: value };
    this.setState({ ...this.state.userData, userData });
    console.log(this.state.userRole);
  };
  render() {
    return (
      <div>
        <h2>Register Form</h2>
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
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>User Role</Form.Label>
            <Form.Control
              as="select"
              name="userRole"
              onChange={this.handleOnChange}
              value={this.state.userData.userRole}
            >
              <option value="">Select A Role</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Button onClick={this.submitForm}>SignUp</Button>
        </Form>
      </div>
    );
  }
}
