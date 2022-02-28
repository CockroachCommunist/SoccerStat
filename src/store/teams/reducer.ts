import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_ERROR,
} from "./teamTypes";

interface IState {
  pending: boolean;
  teams: object;
  error: string | null;
}

const initialState: IState = {
  pending: false,
  teams: [],
  error: null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        pending: false,
        teams: payload.teams,
        error: null,
      };
    case FETCH_TEAM_ERROR:
      return {
        ...state,
        pending: false,
        teams: [],
        error: payload.error,
      };
    default:
      return state;
  }
};
