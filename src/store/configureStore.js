import rootReducer from "./reducers";
import { createStore } from "redux";

const preload = JSON.parse(localStorage.getItem("state")) || {};
const store = createStore(rootReducer, preload);

const localSave = () => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
};
store.subscribe(localSave);

export default store;
