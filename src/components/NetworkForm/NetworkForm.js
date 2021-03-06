import React, { useState } from "react";
import "./NetworkForm.css";
import { Form, Field } from "react-final-form";
import FilterSelect from "components/FilterSelect";
import FlexibleInput from "components/FlexibleInput";
import NetworkTable from "components/NetworkTable";
import BlueSearchSVG from "images/BlueSearchSVG.js";

const visibleProfiles = [
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
  const [profilesCount, setProfilesCount] = useState(0);

  return (
    <Form
      onSubmit={() => alert("submit")}
      initialValues={{ profiles_count: 10 }}
    >
      {({ handleSubmit, form }) => (
        <div className="leadeboard__container">
          <div className="network__title">
            <div className="network__title-top">
              <span>Network</span>
              <div className="network__filters">
                <div className="network__filter">
                  <Field
                    name="school"
                    component={FlexibleInput}
                    placeholder="School"
                  />
                </div>
                <div className="network__filter">
                  <Field
                    name="team"
                    component={FlexibleInput}
                    placeholder="Team"
                  />
                </div>
                <div className="network__filter">
                  <Field
                    name="position"
                    component={FilterSelect}
                    options={positions}
                    placeholder="Position"
                  />
                </div>
                <div className="network__filter">
                  <Field
                    name="age"
                    component={FlexibleInput}
                    placeholder="Age"
                  />
                </div>
                <div className="network__filter">
                  <Field
                    name="favorite"
                    component={FilterSelect}
                    options={favs}
                    placeholder="All"
                  />
                </div>
                <div className="network__filter">
                  <Field
                    name="profiles_count"
                    component={FilterSelect}
                    options={visibleProfiles}
                    placeholder="Show"
                  />
                </div>
              </div>
            </div>
            <div className="network__title-down">
              <div className="network__title-down left">{`Availible Player (${profilesCount})`}</div>
              <div className="network__filters">
                <div className="network__filter">
                  <Field name="player_name" placeholder="Player Name">
                    {({ input, placeholder }) => (
                      <span className="network__input">
                        <BlueSearchSVG />
                        <input {...input} placeholder={placeholder}></input>
                      </span>
                    )}
                  </Field>
                </div>
              </div>
            </div>
          </div>
          <NetworkTable
            filters={form.getState().values}
            changeCount={setProfilesCount}
          />
        </div>
      )}
    </Form>
  );
};

export default NetworkForm;
