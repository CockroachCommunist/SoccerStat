import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import s from "./TeamBreadcrumbs.module.css";

import { RootState } from "../../../store/rootReducer";
import { getTeamsSelector } from "../../../store/teams/selectors";

function handleClick(e: any) {
  e.preventDefault();
}

export const TeamBreadcrumbs = () => {
  const teamMatch = useSelector(getTeamsSelector);
  const id = useSelector((state: RootState) => state.teamMatchId.openId);

  const teamName = useMemo(
    () => teamMatch.find((team: any) => team.id === id)?.name || "",
    [teamMatch, id]
  );

  return (
    <Breadcrumbs
      style={{ color: "#fff", fontSize: "14px" }}
      separator=">"
      aria-label="breadcrumb"
    >
      <NavLink className={s.link} to="/teams">
        Команды
      </NavLink>
      <NavLink
        className={s.link}
        style={{ opacity: "0.7", textDecoration: "none" }}
        to="/teams/:id/match"
        onClick={handleClick}
      >
        {teamName}
      </NavLink>
    </Breadcrumbs>
  );
};
