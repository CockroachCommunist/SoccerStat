import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeagueMatch.module.css";

import { Loader } from "../../Loader/Loader";
import { LeagueBreadCrumbs } from "../../Breadcrumbs/LeagueBreadcrumbs";
import { AwayTeam } from "./AwayTeam/AwayTeam";
import { HomeTeam } from "./HomeTeam/HomeTeam";
import { StatusMatch } from "./StatusMatch/StatusMatch";
import { UtcDate } from "./UtcDate/UtcDate";

import { FetchMatchRequest } from "../../../store/leagueMatch/action";
import { RootState } from "../../../store/rootReducer";
import {
  getError,
  getMatches,
  getPending,
} from "../../../store/leagueMatch/selectors";

export const LeagueMatch = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const matches = useSelector(getMatches);
  const error = useSelector(getError);
  const id = useSelector((state: RootState) => state.leagueMatchId.openId);

  useEffect(() => {
    dispatch(FetchMatchRequest(id));
  }, []);

  return (
    <>
      <article className={s.breadcrumbs}>
        <LeagueBreadCrumbs />
      </article>
      <h2 className={s.title}>Лиги</h2>
      <div className={s.container}>
        {pending && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {error && <>Error</>}
        {!!matches.length &&
          matches.map((match: any) => {
            return (
              <div
                className={pending ? s.loaderActive : s.section}
                key={match.id}
              >
                <div className={s.infoDateStatus}>
                  <UtcDate utcDate={match.utcDate} />
                  <StatusMatch status={match.status} />
                </div>
                <HomeTeam match={match} />
                <AwayTeam match={match} />
              </div>
            );
          })}
      </div>
    </>
  );
};
