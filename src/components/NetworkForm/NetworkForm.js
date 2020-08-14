import React from "react";
import "./NetworkForm.css";
import { Form, Field } from "react-final-form";
import SelectorLeaderboard from "components/SelectorLeaderboard";
import FlexibleInput from "components/FlexibleInput";
import NetworkTable from "components/NetworkTable";

const profilesCount = [
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 25, label: "25" },
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

const NetworkForm = () => {
  return (
    <Form
      onSubmit={() => alert("submit")}
      initialValues={{ profiles_count: 10, offset: 0 }}
    >
      {({ handleSubmit, form }) => (
        <div className="leadeboard__container">
          <div className="leaderboard__title">
            <div className="leaderboard__title-top">
              <span>Network</span>
              <div className="leaderboard__filters">
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
                <div className="leaderboard__filter">
                  <Field
                    name="profiles_count"
                    component={SelectorLeaderboard}
                    options={profilesCount}
                    placeholder="Show"
                  ></Field>
                </div>
              </div>
            </div>
            <div className="leaderboard__title-down">
              <div>Availible Players</div>
              <div className="leaderboard__filters">
                <div className="leaderboard__filter">
                  <Field
                    name="player_name"
                    component={FlexibleInput}
                    placeholder="Player Name"
                  ></Field>
                </div>
              </div>
            </div>
          </div>
          <NetworkTable config={form.getState().values}></NetworkTable>
        </div>
      )}
    </Form>
  );
};

export default NetworkForm;
