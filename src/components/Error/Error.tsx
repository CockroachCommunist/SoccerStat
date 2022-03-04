import React from "react";
import { Link } from "react-router-dom";
import s from "./Error.module.css";

export const Error = () => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Что-то пошло не так...</h2>
      <p className={s.subTitle}>
        <span>Перейдите в </span>
        <Link className={s.link} to="/SoccerStat">
          Лиги
        </Link>
        <span> или </span>
        <Link className={s.link} to="/teams">
          Команды
        </Link>
        .
      </p>
    </section>
  );
};
