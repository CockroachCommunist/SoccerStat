import {
  FETCH_COMPETITION_REQUEST,
  FETCH_COMPETITION_SUCCESS,
  FETCH_COMPETITION_ERROR,
} from "./competitionTypes";

interface IState {
  pending: boolean;
  competitions: object;
  error: null | string;
}

const initialState: IState = {
  pending: false,
  competitions: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COMPETITION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_COMPETITION_SUCCESS:
      return {
        ...state,
        pending: false,
        competitions: action.payload.competitions,
        error: null,
      };
    case FETCH_COMPETITION_ERROR:
      return {
        ...state,
        pending: false,
        competitions: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// const competitionSlice = createSlice({
//   name: 'competitions',
//   initialState,
//   reducers: {
//     FETCH_COMPETITION_REQUEST(state, action){

//     }
//   }

// })
