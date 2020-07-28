import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router";
import Messages from "../notifications/Messages";
import Errors from "../notifications/Errors";
import loginRequest from "./actions";

function Login(props) {
  const submit = (values) => {
    props.loginRequest(values);
  };
    const {
      handleSubmit,
      login: { requesting, successful, messages, errors },
    } = props;

    return (
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(submit)}>
          <h1>LOGIN</h1>
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            type="text"
            id="username"
            className="username"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            component="input"
          />
          <button action="submit">LOGIN</button>
        </form>
        <div className="auth-messages">
          {!requesting && !!errors.length && (
            <Errors message="Failure to login due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && <Messages messages={messages} />}
          {requesting && <div>Logging in...</div>}
          {!requesting && !successful && (
            <Link to="/signup">Need to Signup? Click Here »</Link>
          )}
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => ({
  login: state.login,
});
const connected = connect(mapStateToProps, { loginRequest })(Login);
const formed = reduxForm({
  form: "login",
})(connected);
export default formed;
