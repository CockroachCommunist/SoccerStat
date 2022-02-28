import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <ol className={s.list}>
        <li>
          <NavLink className={s.link} to="/SoccerStat">
            Лиги
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/teams">
            Команды
          </NavLink>
        </li>
      </ol>
    </header>
  );
};
