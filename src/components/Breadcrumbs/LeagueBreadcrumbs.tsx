import React, { useMemo } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getCompetitions } from "../../store/competitions/selectors";

function handleClick(e: any) {
  e.preventDefault();
}

const style = {
  fontSize: "16px",
  color: "#fff",
};

export const LeagueBreadCrumbs = () => {
  const leagueMatch = useSelector(getCompetitions);
  const id = useSelector((state: RootState) => state.leagueMatchId.openId);

  const leagueName = useMemo(
    () => leagueMatch.find((league: any) => league.id === id)?.name || "",
    [leagueMatch, id]
  );

  return (
    <Breadcrumbs style={style} separator=">" aria-label="breadcrumb">
      <NavLink style={{ fontSize: "12px", color: "#fff" }} to="/SoccerStat">
        Лиги
      </NavLink>
      <NavLink
        style={{
          fontSize: "12px",
          textDecoration: "none",
          color: "#fff",
          opacity: "0.7",
        }}
        to="/SoccerStat/:id/match"
        onClick={handleClick}
      >
        {leagueName}
      </NavLink>
    </Breadcrumbs>
  );
};
