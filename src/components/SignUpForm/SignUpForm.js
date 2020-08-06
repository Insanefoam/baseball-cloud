import React from "react";
import { Form, Field } from "react-final-form";
import InputAuth from "components/InputAuth";
import "./SignUpForm.css";
import { NavLink } from "react-router-dom";
import { faUser, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { signUp } from "api";
import { useDispatch } from "react-redux";
import { initUser } from "store/actions";
import { useHistory } from "react-router-dom";

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

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = ({ email, password, passwordConfirmation }, form) => {
    return signUp(email, password, passwordConfirmation)
      .then((res) => {
        dispatch(initUser(email, password, res.headers["access-token"]));
        setTimeout(form.reset);
        history.push("/profile");
        return undefined;
      })
      .catch((err) => {
        return { email: "error", password: "error" };
      });
  };

  return (
    <div className="signup">
      <Form onSubmit={submitHandler}>
        {({ submitErrors, handleSubmit, submitting }) => (
          <div className="form">
            <Field name="usertype" defaultValue="player">
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
            <div className="form__input">
              <Field
                name="passwordConfirmation"
                component={InputAuth}
                placeholder="Confirm Password"
                type="password"
                icon={faCheck}
              ></Field>
            </div>
            {submitErrors && (
              <div className="signup__error">
                Invalid login credentials. Please try again.
              </div>
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
      <div className="signup__forgot">
        <NavLink to="/forgotpassword">Forgotten password?</NavLink>
      </div>
      <div className="signup__signup">
        Already registered? <NavLink to="/login">Sign In</NavLink>
      </div>
    </div>
  );
};

export default SignUpForm;
