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
          <div className="info-form__field"></div>
          <div className="info-form__field">
            <Field
              name="position"
              component={SelectorProfile}
              placeholder="Position in Game"
              options={positions}
            />
          </div>
        </div>
      )}
    </Form>
  );
};

export default ProfileInfoForm;
