import React from "react";
import s from "./HomeTeam.module.css";

export const HomeTeam = ({ match }: any) => {
  return (
    <article className={s.container}>
      <p className={s.teamName}>{match.homeTeam.name}</p>
      <p className={s.score}>
        {match.status === "FINISHED"
          ? `${
              match.score.fullTime.homeTeam
                ? match.score.fullTime.homeTeam
                : "0"
            }`
          : `${
              match.score.fullTime.homeTeam
                ? match.score.fullTime.homeTeam
                : "-"
            }`}
      </p>
    </article>
  );
};
