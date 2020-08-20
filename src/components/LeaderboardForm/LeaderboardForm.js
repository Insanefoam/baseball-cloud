import React from "react";
import "./LeaderboardForm.css";
import { Form, Field } from "react-final-form";
import SelectorLeaderboard from "components/SelectorLeaderboard";
import FlexibleInput from "components/FlexibleInput";
import LeaderbordTable from "components/LeaderbordTable";

const dates = [
  { value: "all", label: "All" },
  { value: "last_week", label: "Last Week" },
  { value: "last_month", label: "Last Month" },
];

const positions = [
  { value: "", label: "All" },
  { value: "catcher", label: "Catcher" },
  { value: "first_base", label: "First Base" },
  { value: "second_base", label: "Second Base" },
  { value: "shortstop", label: "Shortstop" },
  { value: "third_base", label: "Third Base" },
  { value: "outfield", label: "Outfield" },
  { value: "pitcher", label: "Pitcher" },
];

const favs = [
  { value: "", label: "All" },
  { value: 1, label: "Favorite" },
];

const battingVelocity = [
  { value: "exit_velocity", label: "Exit Velocity" },
  { value: "carry_distance", label: "Carry Distance" },
];

const pitchingVelocity = [
  { value: "pitch_velocity", label: "Pitch Velocity" },
  { value: "spin_rate", label: "Spin Rate" },
];

const LeaderboardForm = () => {
  return (
    <div className="leadeboard__container">
      <Form
        onSubmit={() => alert("submit")}
        initialValues={{ batPitch: "batting", type: "exit_velocity" }}
      >
        {({ form }) => {
          return (
            <div className="leaderboard__title">
              <div className="leaderboard__title-top">
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
                      name="school"
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
                  <div className="leaderboard__filter">
                    <Field
                      name="position"
                      component={SelectorLeaderboard}
                      options={positions}
                      placeholder="Position"
                    ></Field>
                  </div>
                  <div className="leaderboard__filter">
                    <Field
                      name="age"
                      component={FlexibleInput}
                      placeholder="Age"
                    ></Field>
                  </div>
                  <div className="leaderboard__filter">
                    <Field
                      name="favorite"
                      component={SelectorLeaderboard}
                      options={favs}
                      placeholder="All"
                    ></Field>
                  </div>
                </div>
              </div>
              <div className="leaderboard__title-down">
                <Field name="batPitch" defaultValue="batting">
                  {({ input }) => (
                    <div>
                      <button
                        className={
                          input.value === "batting"
                            ? "leaderboard__button selected"
                            : "leaderboard__button"
                        }
                        onClick={() => {
                          form.change("type", "exit_velocity");
                          input.onChange("batting");
                        }}
                      >
                        Batting
                      </button>
                      <button
                        className={
                          input.value === "pitching"
                            ? "leaderboard__button selected"
                            : "leaderboard__button"
                        }
                        onClick={() => {
                          form.change("type", "pitch_velocity");
                          input.onChange("pitching");
                        }}
                      >
                        Pitching
                      </button>
                    </div>
                  )}
                </Field>
                <div className="leaderboard__filters">
                  <div className="leaderboard__filter">
                    <Field
                      name="type"
                      component={SelectorLeaderboard}
                      options={
                        form.getState().values.batPitch === "batting"
                          ? battingVelocity
                          : pitchingVelocity
                      }
                      placeholder={
                        form.getState().values.batPitch === "batting"
                          ? battingVelocity[0].label
                          : pitchingVelocity[0].label
                      }
                    ></Field>
                  </div>
                </div>
              </div>
              <LeaderbordTable config={form.getState().values} />
            </div>
          );
        }}
      </Form>
    </div>
  );
};

export default LeaderboardForm;
