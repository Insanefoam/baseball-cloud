import axios from "axios";
import store from "store/configureStore";

const { client, token, uid } = store.getState().auth;

axios.defaults.baseURL = "https://baseballcloud-back.herokuapp.com/api/v1";
axios.defaults.headers["client"] = client;
axios.defaults.headers["uid"] = uid;
axios.defaults.headers["access-token"] = token;

export default axios;
