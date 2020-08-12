import axios from "axios";
import store from "store/configureStore";

const { client, token, uid } = store.getState().auth;

axios.defaults.baseURL = "https://baseballcloud-back.herokuapp.com/api/v1";
axios.defaults["client"] = client;
axios.defaults["uid"] = uid;
axios.defaults["acces-token"] = token;

export default axios;
