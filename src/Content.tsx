import React from "react";
import { Competition, LeagueMatch, TeamMatch, Teams } from "./components";
import { Routes, Route } from "react-router-dom";
import { Error } from "./components/Error/Error";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/SoccerStat" element={<Competition />} />
        <Route path="/SoccerStat/:id/match" element={<LeagueMatch />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id/match" element={<TeamMatch />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default Content;
