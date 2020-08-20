import React, { useState, useEffect } from "react";
import "./Profile.css";
import UnsignedProfile from "./components/UnsignedProfile/UnsignedProfile";
import { getCurrentProfile } from "api";
import SignedProfile from "./components/SignedProfile";
import { useLocation } from "react-router-dom";

const idRegex = /\d+/;

const Profile = () => {
  const location = useLocation();
  const path = location.pathname;
  const id = path.match(idRegex) ? path.match(idRegex)[0] : undefined;
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    getCurrentProfile().then((res) =>
      setProfileInfo(res.data.data.current_profile)
    );
  }, []);

  return id ? (
    <SignedProfile id={id} />
  ) : profileInfo.first_name ? (
    <SignedProfile id={profileInfo.id} />
  ) : (
    <UnsignedProfile />
  );
};

export default Profile;
