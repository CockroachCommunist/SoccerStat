import React from "react";
import s from "./AwayTeam.module.css";


export const AwayTeam =({match}: any)=>{
return(
    <article className={s.container}>
      <p className={s.teamName}>{match.awayTeam.name}</p>
      <p className={s.score}>
        {match.status === "FINISHED"
          ? `${
              match.score.fullTime.awayTeam
                ? match.score.fullTime.awayTeam
                : "0"
            }`
          : `${
              match.score.fullTime.awayTeam
                ? match.score.fullTime.awayTeam
                : "-"
            }`}
      </p>
    </article>
)
}