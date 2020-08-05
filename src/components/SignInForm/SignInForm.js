import React from "react";
import { Form, Field } from "react-final-form";
import InputAuth from "components/InputAuth";
import "./SignInForm.css";
import { NavLink } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const SignInForm = () => {
  const submitHandler = ({ email, password }, form) => {
    setTimeout(form.reset);
  };

  return (
    <div className="signin">
      <div className="signin__title">
        <div className="signin__title big">Welcome to BaseballCloud!</div>
        <div className="signin__title small">Sign into your account here:</div>
      </div>
      <Form onSubmit={submitHandler}>
        {({ handleSubmit }) => (
          <div className="form">
            <div className="form__input">
              <Field
                name="email"
                component={InputAuth}
                placeholder="Email"
                type="email"
                icon={faUser}
              ></Field>
            </div>
            <div className="form__input">
              <Field
                name="password"
                component={InputAuth}
                placeholder="Password"
                type="password"
                icon={faLock}
              ></Field>
            </div>
            <button onClick={handleSubmit} className="signin__button">
              Sign In
            </button>
          </div>
        )}
      </Form>
      <div className="signin__forgot">
        <NavLink to="/forgotpassword">Forgotten password?</NavLink>
      </div>
      <div className="signin__signup">
        Don't have an account? <NavLink to="/registration">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default SignInForm;
