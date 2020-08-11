export default {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#EFF1F3",
    fontSize: "16px",
    fontWeight: "400",
    color: "#667784",
    border: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: "400",
    color: "#667784",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: "400",
    color: "#667784",
    paddingLeft: "10px",
    height: "40px",
  }),
};
