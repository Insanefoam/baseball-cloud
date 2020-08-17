import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "./SignedProfile.css";
import Navigation from "components/Navigation";
import Arrow from "components/Arrow";
import { getProfile, updateFavorite } from "api";
import AgeSVG from "images/AgeSVG";
import HeightSVG from "images/HeightSVG";
import WeightSVG from "images/WeightSVG";
import ThrowsSVG from "images/ThrowsSVG";
import BatsSVG from "images/BatsSVG";
import FavoriteHeart from "images/FavoriteHeart";
import UnfavoriteHeart from "images/UnfavoriteHeart";

const capitalize = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : undefined;
};

const SignedProfile = ({ id }) => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    getProfile(id).then((res) => setProfileInfo(res.data.data.profile));
  }, [id]);

  const changeFavorite = (id) => {
    updateFavorite(id).then((res) =>
      setProfileInfo({ ...profileInfo, favorite: !profileInfo.favorite })
    );
  };

  console.log(profileInfo);
  return (
    <div className="container">
      <Header navigation={Navigation} />
      <section className="profile">
        <aside className="profile__aside">
          <div className="userinfo">
            <div className="userinfo__avatar">
              <button onClick={() => changeFavorite(id)}>
                {profileInfo.favorite ? <FavoriteHeart /> : <UnfavoriteHeart />}
              </button>
              <div
                style={
                  profileInfo.avatar
                    ? { backgroundImage: `url(${profileInfo.avatar})` }
                    : {
                        backgroundImage:
                          "url('../../../../images/profile.png')",
                      }
                }
              ></div>
            </div>
            <div className="userinfo__bio">
              <div className="userinfo__bio-big">{`${profileInfo.first_name} ${profileInfo.last_name}`}</div>
              <div>{capitalize(profileInfo.position)}</div>
            </div>
          </div>
          <div className="personalinfo">
            <div className="personalinfo__item">
              <div className="personalinfo__item-left">
                <AgeSVG></AgeSVG>
                Age
              </div>
              <div className="personalinfo__item-right">{profileInfo.age}</div>
            </div>
            <div className="personalinfo__item">
              <div className="personalinfo__item-left">
                <HeightSVG></HeightSVG>
                Height
              </div>
              <div className="personalinfo__item-right">{`${profileInfo.feet} ft ${profileInfo.inches} in`}</div>
            </div>
            <div className="personalinfo__item">
              <div className="personalinfo__item-left">
                <WeightSVG></WeightSVG>
                Weight
              </div>
              <div className="personalinfo__item-right">{`${profileInfo.weight} lbs`}</div>
            </div>
            <div className="personalinfo__item">
              <div className="personalinfo__item-left">
                <ThrowsSVG></ThrowsSVG>
                Throws
              </div>
              <div className="personalinfo__item-right">
                {capitalize(profileInfo.throws_hand)}
              </div>
            </div>
            <div className="personalinfo__item">
              <div className="personalinfo__item-left">
                <BatsSVG></BatsSVG>
                Bats
              </div>
              <div className="personalinfo__item-right">
                {capitalize(profileInfo.bats_hand)}
              </div>
            </div>
          </div>
          <div className="schoolinfo">
            <div className="schoolinfo__item">
              <h1>School</h1>
              <h2>
                {profileInfo.school ? profileInfo.school.name : undefined}
              </h2>
            </div>
            <div className="schoolinfo__item">
              <h1>School Year</h1>
              <h2>{capitalize(profileInfo.school_year)}</h2>
            </div>
            <div className="schoolinfo__item">
              <h1>Team</h1>
              <h2>
                {profileInfo.teams ? profileInfo.teams[0].name : undefined}
              </h2>
            </div>
            <div className="schoolinfo__item">
              <h1>Facility</h1>
              <h2>
                {profileInfo.facilities
                  ? profileInfo.facilities[0].u_name
                  : undefined}
              </h2>
            </div>
          </div>
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

export default SignedProfile;
