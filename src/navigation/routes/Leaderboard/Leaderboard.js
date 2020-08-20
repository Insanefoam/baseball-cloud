import React from "react";
import Navigation from "components/Navigation";
import Header from "components/Header";
import Footer from "components/Footer";
import "./Leaderboard.css";
import LeaderboardForm from "components/LeaderboardForm";

const Leaderboard = () => {
  return (
    <div className="container">
      <Header navigation={Navigation} />
      <section className="leaderboard">
        <LeaderboardForm />
      </section>
      <Footer />
    </div>
  );
};

export default Leaderboard;
