import { combineReducers } from "redux";
import competition from "./competitions/reducer";
import match from "./matches/reducer";

const rootReducer = combineReducers({
  competition: competition,
  match: match,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
