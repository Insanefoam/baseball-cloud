import React, { useEffect, useState } from "react";
import "./SignedProfileTable.css";
import { getBattingSummary } from "api";
import { Line } from "rc-progress";
import { maxTopValues } from "services/utils";

const SignedProfileTable = ({ info }) => {
  const [summary, setSummary] = useState({});
  const id = info.id;

  useEffect(() => {
    getBattingSummary(id).then((res) =>
      setSummary({
        ...res.data.data.batting_summary,
        top: maxTopValues(res.data.data.batting_summary.top_values),
      })
    );
  }, [id]);
  console.log(summary);
  return (
    <div className="signedtable">
      <div className="topvalues">
        <div className="topvalues__title">Top Batting Values</div>
        <div className="topvalues__values">
          <div className="topvalues__value">
            <div className="topvalues__value-top">
              <p>Exit Velocity</p>
              <strong>{summary.top && summary.top.exit_velocity}</strong>
            </div>
            <div>
              <Line
                percent={summary.top && (summary.top.exit_velocity / 160) * 100}
                strokeWidth="2"
                strokeColor="#FFD01A"
              />
            </div>
          </div>
          <div className="topvalues__value">
            <div className="topvalues__value-top">
              <p>Carry Distance</p>
              <strong>{summary.top && summary.top.distance}</strong>
            </div>
            <div>
              <Line
                percent={summary.top && (summary.top.distance / 350) * 100}
                strokeWidth="2"
                strokeColor="#FFD01A"
              />
            </div>
          </div>
          <div className="topvalues__value">
            <div className="topvalues__value-top">
              <p>Launch Angle</p>
              <strong>{summary.top && summary.top.launch_angle}</strong>
            </div>
            <div>
              <Line
                percent={summary.top && (summary.top.launch_angle / 55) * 100}
                strokeWidth="2"
                strokeColor="#FFD01A"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedProfileTable;
