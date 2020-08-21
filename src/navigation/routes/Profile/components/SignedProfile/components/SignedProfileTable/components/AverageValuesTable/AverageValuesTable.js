import React from "react";
import "./AverageValuesTable.css";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

const AverageValuesTable = ({ values }) => {
  const renderHead = (titles) => {
    return titles.map((title, index) => (
      <th scope="col" key={index}>
        {title}
      </th>
    ));
  };

  const renderRows = (type, rawValues) => {
    if (type === "pitching") {
      return rawValues.map((el, index) => (
        <tr key={index}>
          <td>{el.pitch_type}</td>
          <td>{el.velocity}</td>
          <td>{el.spin_rate}</td>
        </tr>
      ));
    }
    if (type === "batting") {
      return rawValues.map((el, index) => (
        <tr key={index}>
          <td>{el.pitch_type}</td>
          <td>{el.distance}</td>
          <td>{el.launch_angle}</td>
          <td>{el.exit_velocity}</td>
        </tr>
      ));
    }
  };

  const renderBattingTables = () =>
    values.batting.top_values ? (
      <div>
        <div>
          <span>Top Batting Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>
                {renderHead([
                  "Pitch Type",
                  "Distance",
                  "Launch Angle",
                  "Exit Velocity",
                ])}
              </tr>
            </thead>
            <tbody>{renderRows("batting", values.batting.top_values)}</tbody>
          </table>
        </div>
        <div>
          <span>Average Batting Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>
                {renderHead([
                  "Pitch Type",
                  "Distance",
                  "Launch Angle",
                  "Exit Velocity",
                ])}
              </tr>
            </thead>
            <tbody>
              {renderRows("batting", values.batting.average_values)}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="noinfo">There's no info yet!</div>
    );

  const renderPitchingTables = () =>
    values.pitching.top_values ? (
      <div>
        <div>
          <span>Top Pitching Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>{renderHead(["Pitch Type", "Velocity", "Spin Rate"])}</tr>
            </thead>
            <tbody>{renderRows("pitching", values.pitching.top_values)}</tbody>
          </table>
        </div>
        <div>
          <span>Average Pitching Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>{renderHead(["Pitch Type", "Velocity", "Spin Rate"])}</tr>
            </thead>
            <tbody>
              {renderRows("pitching", values.pitching.average_values)}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="noinfo">There's no info yet!</div>
    );

  return (
    <Form
      onSubmit={() => null}
      initialValues={
        values.batting.top_values
          ? { scoresType: "batting" }
          : { scoresType: "pitching" }
      }
    >
      {({ handleSubmit }) => (
        <Field name="scoresType">
          {({ input }) => (
            <div className="tables">
              <button
                className={
                  input.value === "pitching"
                    ? "leaderboard__button selected"
                    : "leaderboard__button"
                }
                onClick={() => {
                  input.onChange("pitching");
                }}
              >
                Pitching
              </button>
              <button
                className={
                  input.value === "batting"
                    ? "leaderboard__button selected"
                    : "leaderboard__button"
                }
                onClick={() => {
                  input.onChange("batting");
                }}
              >
                Batting
              </button>
              {input.value === "pitching" ? renderPitchingTables() : undefined}
              {input.value === "batting" ? renderBattingTables() : undefined}
            </div>
          )}
        </Field>
      )}
    </Form>
  );
};

AverageValuesTable.propTypes = {
  values: PropTypes.object,
};

export default AverageValuesTable;
