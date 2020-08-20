import React from "react";
import Select from "react-select";
import styles from "./styles";

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

export default ProfileSelect;
