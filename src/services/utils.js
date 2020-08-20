export const maxTopValuesBatter = (topValues) => {
  const tmp = topValues.map(
    (el) => el.distance + el.launch_angle + el.exit_velocity
  );
  const max = Math.max(...tmp);

  for (let i = 0; i < tmp.length; ++i) {
    if (tmp[i] === max) return topValues[i];
  }
  return 0;
};

export const maxTopValuesPitcher = (topValues) => {
  const tmp = topValues.map((el) => el.velocity + el.spin_rate);
  const max = Math.max(...tmp);

  for (let i = 0; i < tmp.length; ++i) {
    if (tmp[i] === max) return topValues[i];
  }
  return 0;
};
