import React from "react";
import Navigation from "components/Navigation";
import Header from "components/Header";
import Footer from "components/Footer";
import "./Network.css";
import NetworkForm from "components/NetworkForm";

const Network = () => {
  return (
    <div className="container">
      <Header navigation={Navigation}></Header>
      <section className="leaderboard">
        <NetworkForm></NetworkForm>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Network;
