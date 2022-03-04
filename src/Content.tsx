import React from "react";
import { Routes, Route } from "react-router-dom";

import { Competition, LeagueMatch, TeamMatch, Teams } from "./components";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/SoccerStat" element={<Competition />} />
        <Route path="/SoccerStat/:id/match" element={<LeagueMatch />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id/match" element={<TeamMatch />} />
      </Routes>
    </>
  );
};


