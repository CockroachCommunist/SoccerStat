import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

const getPending = (state: RootState) => state.team.pending;

const getTeams = (state: RootState) => state.team.teams;

const getError = (state: RootState) => state.team.error;

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getTeamsSelector = createSelector(getTeams, (teams) => teams);

export const getErrorSelector = createSelector(getError, (error) => error);
