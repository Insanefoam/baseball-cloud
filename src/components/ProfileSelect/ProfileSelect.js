import React from "react";
import Select from "react-select";
import styles from "./styles";
import PropTypes from "prop-types";

const ProfileSelect = ({ options, placeholder, input }) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      styles={styles}
      isSearchable={false}
      maxMenuHeight={200}
      onChange={({ value }) => input.onChange(value)}
    />
  );
};

ProfileSelect.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  input: PropTypes.object,
};

export default ProfileSelect;
