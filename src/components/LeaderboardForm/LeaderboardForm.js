import React from "react";
import "./LeaderboardForm.css";
import { Form, Field } from "react-final-form";
import SelectorLeaderboard from "components/SelectorLeaderboard";
import FlexibleInput from "components/FlexibleInput";

const dates = [
  { value: "all", label: "All" },
  { value: "lastWeek", label: "Last Week" },
  { value: "lastMonth", label: "Last Month" },
];

const LeaderboardForm = () => {
  return (
    <Form onSubmit={() => alert("submit")}>
      {(handleSubmit) => (
        <div className="leaderboard__title">
          <span>LeaderBoard</span>
          <div className="leaderboard__filters">
            <div className="leaderboard__filter">
              <Field
                name="date"
                component={SelectorLeaderboard}
                options={dates}
                placeholder="Date"
              ></Field>
            </div>
            <div className="leaderboard__filter">
              <Field
                name="date"
                component={FlexibleInput}
                placeholder="School"
              ></Field>
            </div>
            <div className="leaderboard__filter">
              <Field
                name="team"
                component={FlexibleInput}
                placeholder="Team"
              ></Field>
            </div>
          </div>
        </div>
      )}
    </Form>
  );
};

export default LeaderboardForm;
