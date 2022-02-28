import React from "react";
import { Competition, Matches, Teams } from "./components";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/SoccerStat" element={<Competition />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/SoccerStat/:id/match" element={<Matches />} />
      </Routes>
    </>
  );
};

export default Content;
