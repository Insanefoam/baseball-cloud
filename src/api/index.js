import api from "services";

export const signIn = (email, password) =>
  api
    .post("/auth/sign_in", { email, password })
    .then((res) => res)
    .catch((err) => err);

export const signUp = (email, password, passwordConfirmation) =>
  api
    .post("/auth/", { email, password, passwordConfirmation })
    .then((res) => res)
    .catch((err) => err);
