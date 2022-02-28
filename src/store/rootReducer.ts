import { combineReducers } from "redux";
import competition from "./competitions/reducer";
import match from "./matches/reducer";
import team from "./teams/reducer";
import matchId from "./matchId/reducer";

const rootReducer = combineReducers({
  competition,
  match,
  team,
  matchId,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
