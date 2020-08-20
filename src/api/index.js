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
  getPitchingSummaryQuery,
  updateProfileQuery,
} from "./graphqlQueries";

export const signIn = (email, password) =>
  api
    .post("/auth/sign_in", { email, password })
    .then((res) => res)
    .catch((err) => err);

export const signUp = (email, password, password_confirmation, role) =>
  api.post("/auth", { email, password, password_confirmation, role });

export const signOut = () => {};

export const validateToken = () => api.get("/auth/validate_token");

export const getSchools = () => api.post("/graphql", getSchoolsQuery());

export const getTeams = () => api.post("/graphql", getTeamsQuery());

export const getFacilities = () => api.post("/graphql", getFacilitiesQuery());

export const getBattingLeaderboard = (params) =>
  api.post("/graphql", getBattingLeaderboardQuery(params));

export const getPithcingLeaderboard = (params) =>
  api.post("/graphql", getPitchingLeaderboardQuery(params));

export const updateFavorite = (id, value) =>
  api.post("/graphql", updateFavoriteQuery(id, value));

export const getProfiles = (params) =>
  api.post("/graphql", getProfilesQuery(params));

export const getCurrentProfile = () =>
  api.post("/graphql", getCurrentProfileQuery());

export const getProfile = (id) => api.post("/graphql", getProfileQuery(id));

export const getBattingSummary = (id) =>
  api.post("/graphql", getBattingSummaryQuery(id));

export const getPitchingSummary = (id) =>
  api.post("/graphql", getPitchingSummaryQuery(id));

export const updateProfile = (params) =>
  api.post("/graphql", updateProfileQuery(params));
