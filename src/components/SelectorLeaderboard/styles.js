export default {
  container: (provided) => ({
    ...provided,
    outline: "none",
    position: "relative",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "400",
    color: "#48bbff",
    border: "none",
  }),
  singleValue: (provided) => ({
    fontSize: "16px",
    fontWeight: "400",
    color: "#48bbff",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  option: (provided) => ({
    fontSize: "16px",
    fontWeight: "400",
    color: "#788B99",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#ECF8FF",
    },
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    color: "#48bbff",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    "& svg": {
      fill: "#48BBFF",
    },
  }),
};
