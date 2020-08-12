import { INIT_USER, LOGOUT_USER } from "store/constants";

const auth = (state = {}, { type, payload }) => {
  switch (type) {
    case INIT_USER: {
      return {
        ...state,
        uid: payload.uid,
        client: payload.client,
        token: payload.token,
      };
    }
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default auth;
