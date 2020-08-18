import api from "services";
import {
  getSchoolsQuery,
  getTeamsQuery,
  getFacilitiesQuery,
  getBattingLeaderboardQuery,
  getPitchingLeaderboardQuery,
  updateFavoriteQuery,
  getProfilesQuery,
  getCurrentProfileQuery,
  getProfileQuery,
  getBattingSummaryQuery,
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

export const getBattingLeaderboard = (config) =>
  api.post("/graphql", getBattingLeaderboardQuery(config));

export const getPithcingLeaderboard = (config) =>
  api.post("/graphql", getPitchingLeaderboardQuery(config));

export const updateFavorite = (id, value) =>
  api.post("/graphql", updateFavoriteQuery(id, value));

export const getProfiles = (config) =>
  api.post("/graphql", getProfilesQuery(config));

export const getCurrentProfile = () =>
  api.post("/graphql", getCurrentProfileQuery());

export const getProfile = (id) => api.post("/graphql", getProfileQuery(id));

export const getBattingSummary = (id) =>
  api.post("/graphql", getBattingSummaryQuery(id));
