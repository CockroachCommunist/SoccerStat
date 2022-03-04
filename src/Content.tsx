import React from "react";
import { Competition, LeagueMatch, TeamMatch, Teams } from "./components";
import { Routes, Route } from "react-router-dom";
import { Error } from "./components/Error/Error";
import { RootState } from "./store/rootReducer";
import { useSelector } from "react-redux";

const Content = () => {
  const teamId = useSelector((state: RootState) => state.teamMatchId.openId);
  const leagueId = useSelector(
    (state: RootState) => state.leagueMatchId.openId
  );
  return (
    <>
      <Routes>
        <Route path="/SoccerStat" element={<Competition />} />
        <Route path="/SoccerStat/:id/match" element={<LeagueMatch />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id/match" element={<TeamMatch />} />
        <Route path="*" element={<Error />} />
        {/* {!leagueId && <Route path="*" element={<Error />} />} */}
      </Routes>
    </>
  );
};

export default Content;
