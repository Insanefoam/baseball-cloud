import { INIT_USER, LOGOUT_USER } from "store/constants";

export const initUser = (email, password, token) => {
  return { type: INIT_USER, payload: { email, password, token } };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER, payload: {} };
};
