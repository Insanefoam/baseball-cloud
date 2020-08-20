import React from "react";
import SignInForm from "components/SignInForm";
import AuthContainer from "components/AuthContainer";

const Login = () => {
  return (
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  );
};

export default Login;
