import React, { useState, useEffect } from "react";
import "./Profile.css";
import UnsignedProfile from "./components/UnsignedProfile/UnsignedProfile";
import { getCurrentProfile } from "api";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  useEffect(() => {
    getCurrentProfile().then((res) =>
      setProfileInfo(res.data.data.current_profile)
    );
  }, []);
  return profileInfo.first_name ? <div>Signed</div> : <UnsignedProfile />;
};

export default Profile;
