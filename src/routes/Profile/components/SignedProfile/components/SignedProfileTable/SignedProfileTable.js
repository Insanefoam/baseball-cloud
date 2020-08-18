import React, { useEffect, useState } from "react";
import "./SignedProfileTable.css";
import { getBattingSummary, getPitchingSummary } from "api";
import { maxTopValuesBatter, maxTopValuesPitcher } from "services/utils";
import TopValuesTable from "./components/TopValuesTable";

const SignedProfileTable = ({ info }) => {
  const [batterSummary, setBatterSummary] = useState({});
  const [pitcherSummary, setPitcherSummary] = useState({});
  const id = info.id;

  useEffect(() => {
    if (info.position === "batter" || info.position2 === "batter") {
      getBattingSummary(id).then((res) =>
        setBatterSummary({
          ...res.data.data.batting_summary,
          topBatting: maxTopValuesBatter(
            res.data.data.batting_summary.top_values
          ),
        })
      );
    }
    if (info.position === "pitcher" || info.position2 === "pitcher") {
      getPitchingSummary(id).then((res) =>
        setPitcherSummary({
          ...res.data.data.pitching_summary,
          topPitching: maxTopValuesPitcher(
            res.data.data.pitching_summary.top_values
          ),
        })
      );
    }
  }, [id, info.position, info.position2]);
  console.log(pitcherSummary);
  return (
    <div className="signedtable">
      {pitcherSummary.top_values ? (
        <TopValuesTable data={pitcherSummary.topPitching} type="pitching" />
      ) : (
        <h1>Loading...</h1>
      )}
      {batterSummary.top_values ? (
        <TopValuesTable data={batterSummary.topBatting} type="batting" />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SignedProfileTable;
