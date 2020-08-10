import React from "react";
import { Form, Field } from "react-final-form";
import InputProfile from "components/InputProfile";
import "./ProfileInfoForm.css";

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
        </div>
      )}
    </Form>
  );
};

export default ProfileInfoForm;
