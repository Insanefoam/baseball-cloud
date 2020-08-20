import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "./AuthContainer.css";

const AuthContainer = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <section className="main">{children}</section>
      <Footer />
    </div>
  );
};

export default AuthContainer;
