import React, { useEffect, useState } from "react";
import "./SignedProfileTable.css";
import { getBattingSummary, getPitchingSummary } from "api";
import { maxTopValuesBatter, maxTopValuesPitcher } from "services/utils";
import TopValuesTable from "./components/TopValuesTable";
import AvarageValuesTable from "./components/AverageValuesTable";

const SignedProfileTable = ({ info }) => {
  const [batterSummary, setBatterSummary] = useState({});
  const [pitcherSummary, setPitcherSummary] = useState({});
  const { id } = info;

  useEffect(() => {
    if (info.position === "batter" || info.position2 === "batter") {
      getBattingSummary(id).then((res) =>
        setBatterSummary(res.data.data.batting_summary)
      );
    }
    if (info.position === "pitcher" || info.position2 === "pitcher") {
      getPitchingSummary(id).then((res) =>
        setPitcherSummary(res.data.data.pitching_summary)
      );
    }
  }, [id, info.position, info.position2]);

  return (
    <div className="signedtable">
      {pitcherSummary.top_values && (
        <TopValuesTable
          values={maxTopValuesPitcher(pitcherSummary.top_values)}
          type="pitching"
        />
      )}
      {batterSummary.top_values && (
        <TopValuesTable
          values={maxTopValuesBatter(batterSummary.top_values)}
          type="batting"
        />
      )}
      <AvarageValuesTable
        values={{ pitching: pitcherSummary, batting: batterSummary }}
      />
    </div>
  );
};

export default SignedProfileTable;
