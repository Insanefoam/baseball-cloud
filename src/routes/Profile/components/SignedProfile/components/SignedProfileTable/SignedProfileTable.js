import React from "react";
import "./SignedProfileTable.css";
import { getBattingSummary } from "api";

const SignedProfileTable = ({ info }) => {
  console.log(info);
  const id = info.id;
  getBattingSummary(id).then((res) => console.log(res));
  return (
    <div>
      <div>
        <div>Top Batting Values</div>
        <div>
          <div>Exit Velocity</div>
          <div>Carry Distance</div>
          <div>Launch Angle</div>
        </div>
      </div>
    </div>
  );
};

export default SignedProfileTable;
