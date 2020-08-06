import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "./AuthContainer.css";
import { NavLink } from "react-router-dom";

const AuthContainer = ({ centralForm: CentralForm }) => {
  return (
    <div className="container">
      <NavLink to="/">
        <Header />
      </NavLink>
      <section className="main">
        <CentralForm></CentralForm>
      </section>
      <Footer />
    </div>
  );
};

export default AuthContainer;
