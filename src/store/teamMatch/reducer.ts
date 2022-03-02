import {
  FETCH_TEAM_MATCH_REQUEST,
  FETCH_TEAM_MATCH_SUCCESS,
  FETCH_TEAM_MATCH_ERROR,
} from "./teamTypes";

interface IState {
  pending: boolean;
  teamMatch: object;
  error: null | string;
}

const initialState: IState = {
  pending: false,
  teamMatch: [],
  error: null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FETCH_TEAM_MATCH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TEAM_MATCH_SUCCESS:
      return {
        ...state,
        pending: false,
        teamMatch: payload.teamMatch,
        error: null,
      };
    case FETCH_TEAM_MATCH_ERROR:
      return {
        ...state,
        pending: false,
        teamMatch: [],
        error: payload.error,
      };
    default:
      return state;
  }
};
