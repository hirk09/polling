import { useState } from "react";
import registerRequest from "../redux/action/Register";

const useSignUpForm = (callback) => {
  const [state, setState] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleSubmit = (values) => {
    registerRequest(values);
  };
  const handleInputChange = (event) => {
    event.persist();
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    state,
    handleShow,
    handleClose,
    show,
    setShow,
  };
};
export default useSignUpForm;
