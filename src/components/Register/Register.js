import React from "react";
import useSignUpForm from "../../Hooks/FormData";
import { Button, Form} from "react-bootstrap";
import { connect } from 'react-redux'
import registerRequest from '../../redux/action/Register'

 function Register() {
  const { state, handleInputChange, handleSubmit } = useSignUpForm();
  return (
    <div>
      <h2>Register Form</h2>
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
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>User Role</Form.Label>
          <Form.Control
            as="select"
            name="userRole"
            onChange={handleInputChange}
            value={state.userRole}
          >
            <option value="">Select A Role</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Button onClick={handleSubmit}>SignUp</Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  register: state.register,
})
export default connect(mapStateToProps, { registerRequest })(Register)