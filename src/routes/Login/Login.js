import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import SignInForm from "components/SignInForm";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <NavLink to="/">
        <Header />
      </NavLink>
      <section className="main">
        <SignInForm />
      </section>
      <Footer />
    </div>
  );
};

export default Login;
