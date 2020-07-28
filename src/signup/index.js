import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router";

import Messages from "../notifications/Messages";
import Errors from "../notifications/Errors";
import signupRequest from "./actions";

function Signup (props) {
 const  submit = (values) => {
    props.signupRequest(values);
  };
    const {
      handleSubmit,
      signup: { requesting, successful, messages, errors },
    } = props;
    return (
      <div className="signup">
        <form className="widget-form" onSubmit={handleSubmit(submit)}>
          <h1>Signup</h1>
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            type="text"
            id="username"
            className="username"
            label="Username"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <label htmlFor="role">Role</label>
          <Field
            name="role"
            type="select"
            id="role"
            className="role"
            label="role"
            component="select"
          >
            <option value="">select role</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </Field>
          <button action="submit">SIGNUP</button>
        </form>
        <div className="auth-messages">
          {!requesting && !!errors.length && (
            <Errors message="Failure to signup due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && <Messages messages={messages} />}
          {!requesting && successful && (
            <div>
              Signup Successful! <Link to="/login">Click here to Login »</Link>
            </div>
          )}
          {!requesting && !successful && (
            <Link to="/login">Already a Widgeter? Login Here »</Link>
          )}
        </div>
      </div>
    );
  }
const mapStateToProps = (state) => ({
  signup: state.signup,
});
const connected = connect(mapStateToProps, { signupRequest })(Signup);
const formed = reduxForm({
  form: "signup",
})(connected);
export default formed;
