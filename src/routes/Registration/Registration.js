import React from "react";
import SignUpForm from "components/SignUpForm";
import AuthContainer from "components/AuthContainer";

const Registration = () => {
  return <AuthContainer centralForm={SignUpForm}></AuthContainer>;
};

export default Registration;
