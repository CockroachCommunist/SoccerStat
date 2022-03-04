import { combineReducers } from "redux";

import competition from "./competitions/reducer";
import leagueMatch from "./leagueMatch/reducer";
import leagueMatchId from "./leagueMatchId/reducer";
import team from "./teams/reducer";
import teamMatch from "./teamMatch/reducer";
import teamMatchId from "./teamMatchId/reducer";

const rootReducer = combineReducers({
  competition,
  leagueMatch,
  leagueMatchId,
  team,
  teamMatch,
  teamMatchId,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
