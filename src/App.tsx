import React from "react";
import s from "./App.module.css";

import { Content } from "./Content";
import { Header } from "./components";

export const App = () => {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <Header />
      </header>
      <Content />
    </div>
  );
};
