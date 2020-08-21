import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import PropTypes from "prop-types";
import "./AuthBox.css";

const AuthBox = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <section className="main">{children}</section>
      <Footer />
    </div>
  );
};

AuthBox.propTypes = {
  children: PropTypes.node,
};

export default AuthBox;
