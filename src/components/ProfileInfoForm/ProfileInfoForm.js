import React from "react";
import { Form, Field } from "react-final-form";
import InputProfile from "components/InputProfile";
import "./ProfileInfoForm.css";
import SelectorProfile from "components/SelectorProfile";

const positions = [
  { value: "catcher", label: "Catcher" },
  { value: "firstBase", label: "First Base" },
  { value: "secondBase", label: "Second Base" },
  { value: "shortstop", label: "Shortstop" },
  { value: "thirdBase", label: "Third Base" },
  { value: "outfield", label: "Outfield" },
  { value: "pitcher", label: "Pitcher" },
];

const hands = [
  { value: "r", label: "R" },
  { value: "l", label: "L" },
];

const ProfileInfoForm = () => {
  const submitHadler = (values) => alert(values);

  return (
    <Form onSubmit={submitHadler}>
      {(handleSubmit) => (
        <div className="info-form">
          <div className="info-form__field">
            <div className="info-form__field-sub">
              <Field
                name="firstName"
                component={InputProfile}
                placeholder="First Name"
              />
            </div>
            <div className="info-form__field-sub">
              <Field
                name="lastName"
                component={InputProfile}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="info-form__field">
            <Field
              name="position"
              component={SelectorProfile}
              placeholder="Position in Game"
              options={positions}
            />
          </div>
          <div className="info-form__field">
            <Field
              name="secondPosition"
              component={SelectorProfile}
              placeholder="Secondary Position in Game"
              options={[{ value: "none", label: "-" }, ...positions]}
            />
          </div>
          <div className="info-title">
            <span className="info-title__text">Personal info</span>
            <span className="info-title__line">
              <hr></hr>
            </span>
          </div>
          <div className="info-form__field">
            <Field name="age" component={InputProfile} placeholder="Age" />
          </div>
          <div className="info-form__field">
            <div className="info-form__field-sub">
              <Field name="feet" component={InputProfile} placeholder="Feet" />
            </div>
            <div className="info-form__field-sub">
              <Field
                name="inches"
                component={InputProfile}
                placeholder="Inches"
              />
            </div>
          </div>
          <div className="info-form__field">
            <Field
              name="weight"
              component={InputProfile}
              placeholder="Weight"
            />
          </div>
          <div className="info-form__field">
            <div className="info-form__field-sub">
              <Field
                name="secondPosition"
                component={SelectorProfile}
                placeholder="Throws"
                options={hands}
              />
            </div>
            <div className="info-form__field-sub">
              <Field
                name="secondPosition"
                component={SelectorProfile}
                placeholder="Bats"
                options={hands}
              />
            </div>
          </div>
          <div className="info-title">
            <span className="info-title__text">School</span>
            <span className="info-title__line">
              <hr></hr>
            </span>
          </div>
          <div className="info-form__field">
            <Field
              name="school"
              component={SelectorProfile}
              placeholder="School"
              options={[]}
            />
          </div>
        </div>
      )}
    </Form>
  );
};

export default ProfileInfoForm;
