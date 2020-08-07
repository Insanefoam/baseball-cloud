import React from "react";
import { Form, Field } from "react-final-form";
import InputAuth from "components/InputAuth";
import "./RecoveryForm.css";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RecoveryForm = () => {
  const submitHandler = ({ email, password }, form) => {
    return undefined;
  };

  return (
    <div className="recovery">
      <div className="recovery__title">
        <div className="recovery__title big">Forgot Password</div>
        <div className="recovery__title small">
          Please enter your email address. You will receive a link to reset your
          password via email.
        </div>
      </div>
      <Form onSubmit={submitHandler}>
        {({ submitErrors, handleSubmit, submitting }) => (
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
            {submitErrors && (
              <div className="sigin__error">
                Invalid login credentials. Please try again.
              </div>
            )}
            <button
              onClick={handleSubmit}
              className={
                submitting ? "recovery__button submitting" : "recovery__button"
              }
            >
              Sign In
            </button>
          </div>
        )}
      </Form>
      <div className="recovery__signup">
        Remember password? <NavLink to="/login">Sign In</NavLink>
      </div>
    </div>
  );
};

export default RecoveryForm;
