import { RootState } from "../rootReducer";

export const getPending = (state: RootState) => state.match.pending;

export const getMatches = (state: RootState) => state.match.matches;

export const getError = (state: RootState) => state.match.error;
