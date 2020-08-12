import api from "services";
import { getSchoolsQuery } from "./graphqlQueries";

export const signIn = (email, password) =>
  api
    .post("/auth/sign_in", { email, password })
    .then((res) => res)
    .catch((err) => err);

export const signUp = (email, password, password_confirmation, role) =>
  api.post("/auth", { email, password, password_confirmation, role });

export const getSchools = () => api.post("/graphql", getSchoolsQuery());
