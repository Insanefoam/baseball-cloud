import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "./AuthContainer.css";

const AuthContainer = ({ centralForm: CentralForm }) => {
  return (
    <div className="container">
      <Header />
      <section className="main">
        <CentralForm></CentralForm>
      </section>
      <Footer />
    </div>
  );
};

export default AuthContainer;
