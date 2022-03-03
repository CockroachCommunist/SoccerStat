import React from "react";
import Content from "./Content";
import s from "./App.module.css";
import { Header } from "./components";

function App() {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <Header />
      </header>
      <div className={s.mtop}>
        <Content />
      </div>
    </div>
  );
}

export default App;
