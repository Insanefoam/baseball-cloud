import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "./Profile.css";
import Navigation from "components/Navigation";
import Arrow from "components/Arrow";
import UploadAvatarForm from "components/UploadAvatarForm";
import ProfileInfoForm from "components/ProfileInfoForm";

const Profile = () => {
  return (
    <div className="container">
      <Header navigation={Navigation} />
      <section className="profile">
        <aside className="profile__aside">
          <div className="profile__aside-avatar">
            <UploadAvatarForm />
          </div>
          <ProfileInfoForm></ProfileInfoForm>
        </aside>
        <main className="profile__main">
          <div className="prhelp">
            <div className="prhelp__img">
              <Arrow></Arrow>
            </div>
            <div className="prhelp__title">Your Account</div>
            <div className="prhelp__content">
              Changing your profile options lets you control how others see you
              and your profile. These settings include things like your name,
              personal info and school.
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
