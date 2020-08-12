import React from "react";
import Navigation from "components/Navigation";
import Header from "components/Header";
import Footer from "components/Footer";
import "./Leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="container">
      <Header navigation={Navigation}></Header>
      <section className="leaderboard"></section>
      <Footer></Footer>
    </div>
  );
};

export default Leaderboard;
