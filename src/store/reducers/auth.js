import { INIT_USER, LOGOUT_USER } from "store/constants";

const auth = (state = {}, { type, payload }) => {
  switch (type) {
    case INIT_USER: {
      return {
        ...state,
        email: payload.email,
        password: payload.password,
        token: payload.token,
      };
    }
    case LOGOUT_USER:
      return { email: "", password: "", token: "" };
    default:
      return state;
  }
};

export default auth;
