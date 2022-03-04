import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./TeamMatch.module.css";

import { Loader } from "../../Loader/Loader";
import { TeamBreadCrumbs } from "../../Breadcrumbs/TeamBreadcrumbs";
import { HomeTeam } from "./HomeTeam/HomeTeam";
import { AwayTeam } from "./AwayTeam/AwayTeam";
import { StatusMatch } from "./StatusMatch/StatusMatch";
import { UtcDate } from "./UtcDate/UtcDate";

import { FetchTeamMatchRequest } from "../../../store/teamMatch/action";
import { RootState } from "../../../store/rootReducer";
import {
  getPending,
  getTeamMatch,
  getError,
} from "../../../store/teamMatch/selectors";

export const TeamMatch = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPending);
  const teamMatch = useSelector(getTeamMatch);
  const error = useSelector(getError);
  const id = useSelector((state: RootState) => state.teamMatchId.openId);

  useEffect(() => {
    dispatch(FetchTeamMatchRequest(id));
  }, []);

  return (
    <>
      <article className={s.breadcrumbs}>
        <TeamBreadCrumbs />
      </article>
      <h2 className={s.title}>Матчи</h2>
      <section className={s.container}>
        {pending && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {error && <div>Error</div>}
        {!!teamMatch.length &&
          teamMatch.map((match: any) => {
            return (
              <section
                className={pending ? s.loaderActive : s.section}
                key={match.id}
              >
                <div className={s.infoDateStatus}>
                  <UtcDate utcDate={match.utcDate} />
                  <StatusMatch status={match.status} />
                </div>
                <HomeTeam match={match} />
                <AwayTeam match={match} />
              </section>
            );
          })}
      </section>
    </>
  );
};
