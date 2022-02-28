import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_ERROR,
} from "./teamTypes";

export const FetchTeamRequest = () => ({
  type: FETCH_TEAM_REQUEST,
});

export const FetchTeamSuccess = (payload: any) => ({
  type: FETCH_TEAM_SUCCESS,
  payload,
});

export const FetchTeamError = (payload: any) => ({
  type: FETCH_TEAM_ERROR,
  payload,
});
