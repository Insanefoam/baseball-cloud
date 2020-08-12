import axios from "axios";
import store from "store/configureStore";

axios.defaults.baseURL = "https://baseballcloud-back.herokuapp.com/api/v1";

axios.interceptors.request.use((config) => {
  const { client, token, uid } = store.getState().auth;
  if (token) {
    return {
      ...config,
      headers: { ...config.headers, client, uid, "access-token": token },
    };
  }
  return config;
});

export default axios;
