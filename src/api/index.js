import api from "services";
import {
  getSchoolsQuery,
  getTeamsQuery,
  getFacilitiesQuery,
} from "./graphqlQueries";

export const signIn = (email, password) =>
  api
    .post("/auth/sign_in", { email, password })
    .then((res) => res)
    .catch((err) => err);

export const signUp = (email, password, password_confirmation, role) =>
  api.post("/auth", { email, password, password_confirmation, role });

export const validateToken = () => {};

export const signOut = () => {};

export const getSchools = () => api.post("/graphql", getSchoolsQuery());

export const getTeams = () => api.post("/graphql", getTeamsQuery());

export const getFacilities = () => api.post("/graphql", getFacilitiesQuery());
