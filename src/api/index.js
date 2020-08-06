import api from "services";

export const signIn = (email, password) =>
  api
    .post("/auth/sign_in", { email, password })
    .then((res) => res)
    .catch((err) => console.log(err));
