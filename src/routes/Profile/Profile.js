import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "./Profile.css";
import Navigation from "components/Navigation";

const Profile = () => {
  return (
    <div className="container">
      <Header navigation={Navigation} />
      <section className="profile">profile page</section>
      <Footer />
    </div>
  );
};

export default Profile;
