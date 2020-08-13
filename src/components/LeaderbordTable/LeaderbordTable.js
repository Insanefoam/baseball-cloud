import React, { useEffect } from "react";
import "./LeaderbordTable.css";
import { getBattingLeaderboard, getPithcingLeaderboard } from "api";

const LeaderbordTable = ({ config }) => {
  useEffect(() => {
    if (config.batPitch === "batting") {
      getBattingLeaderboard({ ...config, batPitch: undefined }).then((res) =>
        console.log(res)
      );
    } else {
      getPithcingLeaderboard({ ...config, batPitch: undefined }).then((res) =>
        console.log(res)
      );
    }
  }, [config]);
  return <div>table</div>;
};

export default LeaderbordTable;
