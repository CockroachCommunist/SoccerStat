import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import s from "./LeagueBreadcrumbs.module.css";

import { RootState } from "../../../store/rootReducer";
import { getCompetitions } from "../../../store/competitions/selectors";

function handleClick(e: any) {
  e.preventDefault();
}

export const LeagueBreadcrumbs = () => {
  const leagueMatch = useSelector(getCompetitions);
  const id = useSelector((state: RootState) => state.leagueMatchId.openId);

  const leagueName = useMemo(
    () => leagueMatch.find((league: any) => league.id === id)?.name || "",
    [leagueMatch, id]
  );

  return (
    <Breadcrumbs
      style={{ color: "#fff", fontSize: "14px" }}
      separator=">"
      aria-label="breadcrumb"
    >
      <NavLink className={s.link} to="/SoccerStat">
        Лиги
      </NavLink>
      <NavLink
        className={s.link}
        style={{ opacity: "0.7", textDecoration: "none" }}
        to="/SoccerStat/:id/match"
        onClick={handleClick}
      >
        {leagueName}
      </NavLink>
    </Breadcrumbs>
  );
};
