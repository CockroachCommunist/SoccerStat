import { RootState } from "../rootReducer";

export const getPending = (state: RootState) => state.teamMatch.pending;

export const getTeamMatch = (state: RootState) => state.teamMatch.teamMatch;

export const getError = (state: RootState) => state.teamMatch.error;
