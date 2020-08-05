import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import SignInForm from "components/SignInForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <Header></Header>
      <section className="main">
        <SignInForm></SignInForm>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Login;
