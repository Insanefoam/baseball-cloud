import React from "react";
import { Form, Field } from "react-final-form";
import InputAuth from "components/InputAuth";
import "./SignUpForm.css";
import { NavLink } from "react-router-dom";
import {
  faUser,
  faLock,
  faCheck,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { signUp } from "api";
import { useDispatch } from "react-redux";
import { initUser } from "store/actions";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const playerTab = (
  <div className="tab">
    <div className="tab__title">Players</div>
    <div className="tab__content">
      Players have their own profile within the system and plan on having data
      collected.
    </div>
  </div>
);

const scoutTab = (
  <div className="tab">
    <div className="tab__title">Scouts</div>
    <div className="tab__content">
      Coaches and scouts can view players in the system but do not have their
      own profile.
    </div>
  </div>
);

const validate = (email, password, passwordConfirmation) => {
  if (password && password.length < 8) {
    return { password: "Must contain more than 8 characters" };
  }

  if (password !== passwordConfirmation) {
    return { passwordConfirmation: "Passwords are not equal" };
  }

  return email
    ? password
      ? undefined
      : { password: "Required" }
    : password
    ? { email: "Required" }
    : { email: "Required", password: "Required" };
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (
    { email, password, passwordConfirmation, role },
    form
  ) => {
    const errors = validate(email, password, passwordConfirmation);
    if (errors) {
      return errors;
    }

    return signUp(email, password, passwordConfirmation, role)
      .then((res) => {
        console.log(res);
        dispatch(initUser(email, password, res.headers["access-token"]));
        setTimeout(form.reset);
        history.push("/profile");
        return undefined;
      })
      .catch((err) => {
        return { signup: "Email has already been taken" };
      });
  };

  return (
    <div className="signup">
      <Form onSubmit={submitHandler}>
        {({ submitErrors, handleSubmit, submitting }) => (
          <div className="form">
            <Field name="role" defaultValue="player">
              {({ input }) => (
                <div className="signup__switcher">
                  <div className="switch">
                    <button
                      onClick={() => input.onChange("player")}
                      className={
                        input.value === "player"
                          ? "switch__button"
                          : "switch__button inactive"
                      }
                    >
                      <FontAwesomeIcon
                        icon={faCheckSquare}
                        className={
                          input.value === "player"
                            ? "switch__icon"
                            : "switch__icon-inactive"
                        }
                      />
                      Sign Up as Player
                    </button>
                    <button
                      onClick={() => input.onChange("scout")}
                      className={
                        input.value === "scout"
                          ? "switch__button"
                          : "switch__button inactive"
                      }
                    >
                      <FontAwesomeIcon
                        icon={faCheckSquare}
                        className={
                          input.value === "scout"
                            ? "switch__icon"
                            : "switch__icon-inactive"
                        }
                      />
                      Sign Up as Scout
                    </button>
                  </div>
                  {input.value === "player" ? playerTab : scoutTab}
                </div>
              )}
            </Field>
            <div className="form__input">
              <Field
                name="email"
                component={InputAuth}
                placeholder="Email"
                type="email"
                icon={faUser}
              ></Field>
              {submitErrors && (
                <div className="signup__error">{submitErrors.email}</div>
              )}
            </div>
            <div className="form__input">
              <Field
                name="password"
                component={InputAuth}
                placeholder="Password"
                type="password"
                icon={faLock}
              ></Field>
              {submitErrors && (
                <div className="signup__error">{submitErrors.password}</div>
              )}
            </div>
            <div className="form__input">
              <Field
                name="passwordConfirmation"
                component={InputAuth}
                placeholder="Confirm Password"
                type="password"
                icon={faCheck}
              ></Field>
              {submitErrors && (
                <div className="signup__error">
                  {submitErrors.passwordConfirmation}
                </div>
              )}
            </div>
            {submitErrors && (
              <div className="signup__error">{submitErrors.signup}</div>
            )}
            <div className="signup__agree">
              By clicking Sign Up, you agree to our{" "}
              <NavLink to="/">Terms of Service</NavLink> and{" "}
              <NavLink to="/">Privacy Policy</NavLink>.
            </div>
            <button
              onClick={handleSubmit}
              className={
                submitting ? "signup__button submitting" : "signup__button"
              }
            >
              Sign Up
            </button>
          </div>
        )}
      </Form>
      <div className="signup__signup">
        Already registered? <NavLink to="/login">Sign In</NavLink>
      </div>
    </div>
  );
};

export default SignUpForm;
