import { INIT_USER, LOGOUT_USER } from "store/constants";

export const initUser = (uid, client, token) => {
  return { type: INIT_USER, payload: { uid, client, token } };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER, payload: {} };
};
