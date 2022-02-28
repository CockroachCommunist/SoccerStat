import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FetchMatchRequest } from "../../../store/matches/action";
import {
  getError,
  getMatches,
  getPending,
} from "../../../store/matches/selectors";
import { RootState } from "../../../store/rootReducer";
import { Loader } from "../../Loader/Loader";
import s from "./Matches.module.css";

interface IProps {
  id: number;
}

export const Matches = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const matches = useSelector(getMatches);
  const error = useSelector(getError);
  const id = useSelector((state: RootState) => state.matchId.openId);

  useEffect(() => {
    dispatch(FetchMatchRequest(id));
  }, []);

  console.log(matches);

  return (
    <>
      {pending && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      {matches.length &&
        matches.map((match: any) => {
          return (
            <div
              className={pending ? s.loaderActive : s.section}
              key={match.id}
            >
              <div className={s.infoDateStatus}>
                <div className={s.date}>Начало: {match.season.startDate}</div>
                <div
                  className={
                    match.status === "FINISHED" ? s.statusFinished : s.status
                  }
                >
                  {match.status === "SCHEDULED" && "Запланирован"}{" "}
                  {match.status === "LIVE" && "Прямой эфир"}
                  {match.status === "IN_PLAY" && "В игре"}
                  {match.status === "PAUSED" && "Пауза"}
                  {match.status === "FINISHED" && "Завершен"}
                  {match.status === "POSTPONED" && "Отложен"}
                  {match.status === "SUSPENDED" && "Приостановлен"}
                  {match.status === "CANCELED" && "Отменен"}
                </div>
              </div>
              <div className={s.homeTeam}>
                <div className={s.teamsName}>{match.homeTeam.name}</div>
                <div>
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
                </div>
              </div>
              <div className={s.awayTeam}>
                <div className={s.teamsName}>{match.awayTeam.name}</div>
                <div>
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
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
