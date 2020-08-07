import React from "react";
import AuthContainer from "components/AuthContainer";
import RecoveryForm from "components/RecoveryForm/RecoveryForm";

const ForgotPassword = () => {
  return <AuthContainer centralForm={RecoveryForm}></AuthContainer>;
};

export default ForgotPassword;
